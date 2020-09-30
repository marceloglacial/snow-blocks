import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import PostListView from './PostListView';
import apiFetch from '@wordpress/api-fetch';
import { useEffect } from 'react';

registerBlockType('snow-blocks/post-list', {
  title: __('Post List', 'Post-list'),
  description: __('List of posts.', 'post-list-description'),
  category: 'widgets',
  icon: 'screenoptions',
  supports: {
    html: false,
  },
  attributes: {
    posts: {
      type: 'array',
    },
  },
  edit: (props) => {
    useEffect(() => {
      apiFetch({ path: '/wp/v2/posts' }).then((posts) => {
        props.setAttributes({ posts: posts });
      });
    }, []);
    return <PostListView env {...props} />;
  },
  save: (props) => {
    return <PostListView {...props} />;
  },
});
