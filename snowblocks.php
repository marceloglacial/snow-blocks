<?php
/**
 * Plugin Name:     Snowblocks
 * Description:     Example block written with ESNext standard and JSX support – build step required.
 * Version:         0.12.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     snowblocks
 *
 * @package         create-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function create_block_snowblocks_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "create-block/snowblocks" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'create-block-snowblocks-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'create-block-snowblocks-block-editor', 'snowblocks' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'create-block-snowblocks-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'create-block-snowblocks-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'create-block/snowblocks', array(
		'editor_script' => 'create-block-snowblocks-block-editor',
		'editor_style'  => 'create-block-snowblocks-block-editor',
		'style'         => 'create-block-snowblocks-block',
	) );
}
add_action( 'init', 'create_block_snowblocks_block_init' );

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

function set_allowed_blocks($final_blocks, $post) {
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
        'snow-blocks/hubspot-forms',
        'snow-blocks/postslist',
		'snow-blocks/forms',
		'snow-blocks/instagram-feed',
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


// Add blocks to the API
// @see https://wpscholar.com/blog/add-gutenberg-blocks-to-wp-rest-api/

add_action(
	'rest_api_init',
	function () {

		if ( ! function_exists( 'use_block_editor_for_post_type' ) ) {
			require ABSPATH . 'wp-admin/includes/post.php';
		}

		// Surface all Gutenberg blocks in the WordPress REST API
		$post_types = get_post_types_by_support( [ 'editor' ] );
		foreach ( $post_types as $post_type ) {
			if ( use_block_editor_for_post_type( $post_type ) ) {
				register_rest_field(
					$post_type,
					'blocks',
					[
						'get_callback' => function ( array $post ) {
							return parse_blocks( $post['content']['raw'] );
						},
					]
				);
			}
		}
	}
);
