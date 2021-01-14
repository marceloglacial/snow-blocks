import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import FormsSelection from './components/FormsSelection';
import FormView from './components/FormView';

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
    formKey: {
      type: 'string',
      default: '',
    },
  },
  edit: (props) => {
    const { formUrl } = props.attributes;
    if (!formUrl) return <FormsSelection {...props} />;
    return <FormView {...props} />;
  },
  save: (props) => {
    return <p>test</p>;
  },
});
