import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import useApi from '../../functions/useApi';
import PostsListsView from './components/PostsListView';
import Alert from '../Alert/Alert';
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
    showDate: {
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
  save: (props) => {
    const { title } = props.attributes;
    return (
      <div className='posts-list'>
        <h2>{title}</h2>
        <p>Dynamic List</p>
      </div>
    );
  },
});
