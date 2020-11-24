import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType('snow-blocks/postslist', {
  title: __('Posts List', 'postslist'),
  category: 'widgets',
  icon: 'cards',
  supports: {
    html: false,
  },
  attributes: {
    title: {
      type: 'string',
    },
  },
  edit: (props) => <p>posts</p>,
  save: (props) => <p>posts</p>,
});
