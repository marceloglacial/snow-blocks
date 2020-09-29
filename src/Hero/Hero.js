import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import HeroView from './HeroView';

registerBlockType('snow-blocks/hero', {
  title: __('Hero', 'hero'),
  description: __('Aweomse Custom Blocks.', 'hero'),
  category: 'widgets',
  icon: 'smiley',
  supports: {
    html: false,
  },
  edit: () => {
    return <HeroView env />;
  },
  save: () => {
    return <HeroView />;
  },
});
