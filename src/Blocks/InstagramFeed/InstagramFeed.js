import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import InstagramFeedSelection from './components/InstagramFeedSelection';
import InstagramFeedView from './components/InstagramFeedView';

registerBlockType('snow-blocks/instagram-feed', {
  title: __('Instagram Feed', 'instagramfeed'),
  category: 'widgets',
  icon: 'heart',
  supports: {
    html: false,
  },
  attributes: {
    userID: {
      type: 'string',
    },
  },
  edit: (props) => {
    if (!props.attributes.userID) return <InstagramFeedSelection {...props} />;

    return <InstagramFeedView {...props} />;
  },
  save: (props) => null,
});
