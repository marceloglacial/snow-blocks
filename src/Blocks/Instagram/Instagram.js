import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import InstagramPostSelection from './components/InstagramPostSelecion';
import InstagramPostView from './components/InstagramPostView';
import useScript from '../../hooks/useScript';

registerBlockType('snow-blocks/instagram', {
  title: __('Instagram Post', 'instagram'),
  category: 'widgets',
  icon: 'heart',
  supports: {
    html: false,
  },
  attributes: {
    url: {
      type: 'string',
      default: '',
    },
  },
  edit: (props) => {
    if (!props.attributes.url) return <InstagramPostSelection {...props} />;

    useScript(
      'instagram-container',
      `<script src="//www.instagram.com/embed.js"></script>`
    );

    return <InstagramPostView {...props} />;
  },
  save: (props) => {
    return <InstagramPostView {...props} />;
  },
});
