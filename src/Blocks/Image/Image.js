import { registerBlockType } from '@wordpress/blocks';
import ImageEditor from './components/ImageEditor';
import ImageView from './components/ImageView';

registerBlockType('snow-blocks/image', {
  title: 'Image',
  category: 'widgets',
  icon: 'format-image',
  supports: {
    html: false,
  },
  attributes: {
    media: {
      type: 'object',
      default: {
        sizes: {
          full: { url: '' },
          large: { url: '' },
          medium: { url: '' },
          thumbnail: { url: '' },
        },
      },
    },
    imageSize: {
      type: 'string',
      default: 'full',
    },
    imageAlignment: {
      type: 'string',
      default: 'center',
    },
  },
  edit: (props) => <ImageEditor {...props} />,
  save: (props) => <ImageView {...props} />,
});
