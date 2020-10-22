import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import HeroMediLibrary from './HeroMediaLibrary';
import HeroView from './HeroView';

registerBlockType('snow-blocks/hero', {
  title: __('Hero', 'hero'),
  description: __('Aweomse Custom Blocks.', 'hero'),
  category: 'widgets',
  icon: 'smiley',
  supports: {
    html: false,
  },
  attributes: {
    title: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    buttonText: {
      type: 'string',
    },
    buttonLink: {
      type: 'string',
    },
    imageUrl: {
      type: 'string',
    },
  },
  edit: (props) => {
    const { imageUrl } = props.attributes;
    if (!imageUrl) return <HeroMediLibrary {...props} />;

    return <HeroView env {...props} />;
  },
  save: (props) => {
    return <HeroView {...props} />;
  },
});
