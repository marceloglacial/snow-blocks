import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import useApi from '../../functions/useApi';
import PostsListsView from './components/PostsListView';
import './styles/postslist-editor.scss';

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
  save: (props) => (
    <p>This is a React dynamic Block. Please use a headless front-end.</p>
  ),
});
