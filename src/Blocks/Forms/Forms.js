import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import FormsSelection from './components/FormsSelection';
import FormView from './components/FormView';
import { useEffect } from 'react';
import useScript from '../../hooks/useScript';

const { v4: uuidv4 } = require('uuid');

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
    formId: {
      type: 'string',
      default: uuidv4(),
    },
  },
  edit: (props) => {
    const { attributes, setAttributes } = props;
    const { formUrl, formId } = attributes;

    if (!formUrl) return <FormsSelection {...props} />;

    useEffect(() => {
      setAttributes({ formId: uuidv4() });
    }, []);

    useScript(
      formId,
      `<script src="https://unpkg.com/formiojs@latest/dist/formio.embed.js?src=${formUrl}"></script>`
    );

    return <FormView {...props} />;
  },
  save: (props) => {
    return <FormView {...props} />;
  },
});
