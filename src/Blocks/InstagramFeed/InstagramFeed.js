import { registerBlockType } from '@wordpress/blocks';
import InstagramFeedInspector from './components/InstagramFeedInspector';
import InstagramFeedSelection from './components/InstagramFeedSelection';
import InstagramFeedView from './components/InstagramFeedView';

registerBlockType('snow-blocks/instagram-feed', {
  title: 'Instagram Feed',
  category: 'widgets',
  icon: 'heart',
  supports: {
    html: false,
  },
  attributes: {
    userID: {
      type: 'string',
    },
    itemsNumber: {
      type: 'string',
      default: '6',
    },
    imageType: {
      type: 'string',
      default: 'default',
    },
  },
  edit: (props) => {
    if (!props.attributes.userID) return <InstagramFeedSelection {...props} />;
    return (
      <>
        <InstagramFeedInspector {...props} />
        <InstagramFeedView {...props} />
      </>
    );
  },
  save: (props) => null,
});
