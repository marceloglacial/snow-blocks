import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import PostListView from './PostListView';

registerBlockType('snow-blocks/post-list', {
  title: __('Post List', 'Post-list'),
  description: __('List of posts.', 'post-list-description'),
  category: 'widgets',
  icon: 'block',
  supports: {
    html: false,
  },
  edit: () => {
    return <PostListView env />;
  },
  save: () => {
    return <PostListView />;
  },
});
