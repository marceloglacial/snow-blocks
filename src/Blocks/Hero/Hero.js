import { registerBlockType } from '@wordpress/blocks';
import HeroInspector from './components/HeroInspector';
import HeroMediLibrary from './components/HeroMediaLibrary';
import HeroView from './components/HeroView';
import { useState, useEffect } from 'react';
import getSlug from '../../functions/getSlug';

registerBlockType('snow-blocks/hero', {
  title: 'Hero',
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
    },
    buttonLink: {
      type: 'string',
      default: '#',
    },
    imageUrl: {
      type: 'string',
    },
    imagePosition: {
      type: 'string',
      default: 'right',
    },
    imageStyle: {
      type: 'string',
      default: 'default',
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
    const { imageUrl, buttonLink, buttonSlug } = props.attributes;
    if (!imageUrl) return <HeroMediLibrary {...props} />;

    const [slug, setSlug] = useState(buttonSlug);

    useEffect(() => {
      setSlug(getSlug(buttonLink));
    }, [buttonLink]);

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
