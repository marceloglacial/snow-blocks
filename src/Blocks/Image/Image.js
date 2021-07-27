import { registerBlockType } from '@wordpress/blocks';
import ImageEditor from './components/ImageEditor';
import ImageView from './components/ImageView';

registerBlockType('snow-blocks/image', {
  title: 'Image',
  category: 'widgets',
  icon: 'image',
  supports: {
    html: false,
  },
  attributes: {
    src: {
      type: 'string',
    },
    alt: {
      type: 'string',
    },
    caption: {
      type: 'string',
    },
    width: {
      type: 'string',
    },
    height: {
      type: 'string',
    },
    className: {
      type: 'string',
    },
  },
  edit: (props) => <ImageEditor {...props} />,
  save: (props) => <ImageView {...props} />,
});
