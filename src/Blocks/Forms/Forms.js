import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import FormsSelection from './components/FormsSelection';
import FormsPree from './components/FormsPree';

registerBlockType('snow-blocks/forms', {
  title: __('Forms', 'forms'),
  category: 'widgets',
  icon: 'feedback',
  supports: {
    html: false,
  },
  attributes: {
    formUrl: {
      type: 'string',
      default: '',
    },
    formType: {
      type: 'string',
      default: '',
    },
    formFields: {
      type: 'array',
      default: [],
    },
  },
  edit: (props) => {
    const { formType } = props.attributes;

    const forms = {
      formspree: {
        title: 'Formspree',
        component: <FormsPree {...props} />,
      },
    };

    const formsData = {
      ...props,
      forms,
    };

    if (!formType) return <FormsSelection {...formsData} />;
    return forms[formType].component;
  },
  save: (props) => {
    return <p>test</p>;
  },
});
