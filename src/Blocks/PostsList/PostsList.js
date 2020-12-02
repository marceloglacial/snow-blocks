import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import useApi from '../../functions/useApi';
import PostsListsView from './components/PostsListView';
import Alert from '../Alert/Alert';
import './styles/postslist-editor.scss';
import PostsListInspector from './components/PostsListInspector';

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
    categoryList: {
      type: 'array',
      default: [],
    },
    showImage: {
      type: 'string',
      default: 'yes',
    },
    showDate: {
      type: 'string',
      default: 'yes',
    },
    showText: {
      type: 'string',
      default: 'no',
    },
  },
  edit: (props) => {
    const { data, isLoading, isError } = useApi(
      'posts',
      props.attributes.categoryList
    );
    const postData = {
      data,
      isLoading,
      isError,
      props,
    };

    return (
      <>
        <PostsListInspector {...props} />
        <PostsListsView {...postData} />
      </>
    );
  },
  save: (props) => (
    <Alert title='This is a React dynamic Block. Please use a headless front-end.' />
  ),
});
