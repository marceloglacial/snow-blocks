import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import FormsSelection from './components/FormsSelection';

registerBlockType('snow-blocks/forms', {
  title: __('Forms', 'forms'),
  category: 'widgets',
  icon: 'feedback',
  supports: {
    html: false,
  },
  attributes: {
    url: {
      type: 'string',
      default: '',
    },
    forms: {
      type: 'array',
      default: [],
    },
    formType: {
      type: 'string',
      default: '',
    },
  },
  edit: (props) => {
    const { forms, formType } = props.attributes;
    if (!formType) return <FormsSelection {...props} />;
    return <p>test</p>;
  },
  save: (props) => {
    return <p>test</p>;
  },
});
