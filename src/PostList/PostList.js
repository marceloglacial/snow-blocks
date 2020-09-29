import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import PostListView from './PostListView';

registerBlockType('snow-blocks/post-list', {
  title: __('Post List', 'Post-list'),
  description: __('List of posts.', 'post-list-description'),
  category: 'widgets',
  icon: 'screenoptions',
  supports: {
    html: false,
  },
  edit: () => {
    // https://developer.wordpress.org/block-editor/packages/packages-api-fetch/
    // https://getbootstrap.com/docs/4.5/components/card/#card-decks
    return <PostListView env />;
  },
  save: () => {
    return <PostListView />;
  },
});
