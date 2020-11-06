import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import HeroInspector from './HeroInspector';
import HeroMediLibrary from './HeroMediaLibrary';
import HeroView from './HeroView';

registerBlockType('snow-blocks/hero', {
  title: __('Hero', 'hero'),
  category: 'widgets',
  icon: 'cover-image',
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
      default: 'Button Text',
    },
    buttonLink: {
      type: 'string',
      default: '#',
    },
    imageUrl: {
      type: 'string',
    },
    hasButton: {
      type: 'string',
      default: 'no',
    },
    heroStyle: {
      type: 'string',
      default: 'full',
    },
    image: {
      type: 'object',
    },
  },
  edit: (props) => {
    const { imageUrl } = props.attributes;
    if (!imageUrl) return <HeroMediLibrary {...props} />;
    return (
      <>
        <HeroInspector {...props} />
        <HeroView env {...props} />
      </>
    );
  },
  save: (props) => {
    return <HeroView {...props} />;
  },
});
