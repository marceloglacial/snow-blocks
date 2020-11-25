import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import useApi from '../../functions/useApi';
import PostsListsView from './components/PostsListView';

registerBlockType('snow-blocks/postslist', {
  title: __('Posts List', 'postslist'),
  category: 'widgets',
  icon: 'excerpt-view',
  supports: {
    html: false,
  },
  attributes: {
    title: {
      type: 'string',
    },
  },
  edit: (props) => {
    const { data, isLoading, isError } = useApi('posts');
    const postData = {
      data,
      isLoading,
      isError,
      props,
    };

    return <PostsListsView {...postData} />;
  },
  save: (props) => <PostsListsView {...props} />,
});
