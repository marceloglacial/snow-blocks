import { registerBlockType } from '@wordpress/blocks';
import useApi from '../../hooks/useApi';
import PostsListsView from './components/PostsListView';
import PostsListInspector from './components/PostsListInspector';
import Alert from '../Alert/Alert';

registerBlockType('snow-blocks/postslist', {
  title: 'Posts List',
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
      default: 'yes',
    },
    showDate: {
      type: 'string',
      default: 'yes',
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
    <Alert title='Dynamic Block. Please use a Headless App to render it.' />
  ),
});
