<?php
/**
 * Plugin Name:     Snow Blocks
 * Description:     Awesome Custom Blocks
 * Version:         0.1.0
 * Author:          Marcelo Glacial
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     snow-blocks
 *
 * @package         create-block
 */

function snow_blocks_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "marceloglacial/snow-blocks" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'snow-blocks-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'snow-blocks-block-editor', 'snow-blocks' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'snow-blocks-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	register_block_type( 'marceloglacial/snow-blocks', array(
		'editor_script' => 'snow-blocks-block-editor',
		'editor_style'  => 'snow-blocks-block-editor',
		'style'         => 'snow-blocks-block',
	) );
}
add_action( 'init', 'snow_blocks_block_init' );


/**
 * Specify allowed core blocks
 *
 * @package Blocks
 * @category Gutenberg Supports
 * @version 1.0
 * @see other uses for this function: https://rudrastyh.com/gutenberg/remove-default-blocks.html
 * @see a list of core blocks: https://wpdevelopment.courses/a-list-of-all-default-gutenberg-blocks-in-wordpress-5-0/
 * @see set available core blocks https://github.com/WordPress/gutenberg/tree/master/packages/block-library/src
 *
 */
function set_allowed_blocks($final_blocks, $post)
{
    // Register core blocks
    $core_blocks = array(
        'core/heading',
        'core/gallery',
        'core/image',
        'core/list',
        'core/paragraph',
        'core/quote',
        'core/table',
		'core/code',
        'core/embed',
    );

    // Register custom blocks
    $custom_blocks = array(
        'snow-blocks/hero',
        'snow-blocks/post-list',
    );

    // Register admin specific blocks
    $admin_blocks = array();

    if (current_user_can('administrator')) {
        $admin_blocks = array(
            'core/html',
            'core/shortcode',
        );
    }

    // Specify block groupings available on specific post types
    switch ($post->post_type) {
        case 'cu_accordion':
            $final_blocks = array_merge($core_blocks);
            break;
        default:
            $final_blocks = array_merge($core_blocks, $custom_blocks, $admin_blocks);
    }

    return $final_blocks;
}
add_filter('allowed_block_types', 'set_allowed_blocks', 10, 2);
