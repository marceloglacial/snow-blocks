import { useState } from 'react';
import addField from '../functions/addField';
import InputView from './InputView';

const FormsPree = (props) => {
  const { attributes, setAttributes } = props;
  const { formUrl, formFields } = attributes;
  const [url, setUrl] = useState(formUrl);
  const handleUrl = (e) => setUrl(e);
  const handleSetUrl = (e) => setAttributes({ formUrl: url });

  if (!formUrl)
    return (
      <div className='form-container'>
        <label htmlFor='url'>
          <h3>Form endpoint</h3>
        </label>
        <input
          name='url'
          id='url'
          type='url'
          onChange={(e) => handleUrl(e.target.value)}
        />
        <button onClick={(e) => handleSetUrl(e)}>Add Form</button>
      </div>
    );

  const inputTypes = [
    {
      type: 'text',
      name: 'Text',
      label: 'Text',
    },
    {
      type: 'password',
      name: 'Password',
      label: 'Password',
    },
    {
      type: 'number',
      name: 'Number',
      label: 'Number',
    },
    {
      type: 'file',
      name: 'File',
      label: 'File',
    },
    {
      type: 'email',
      name: 'E-mail',
      label: 'E-mail',
      placeholder: 'Type your e-mail',
    },
    {
      type: 'url',
      name: 'Url',
      label: 'Url',
      placeholder: 'http://',
    },
    {
      type: 'textarea',
      name: 'Message',
      label: 'Message',
      placeholder: 'Type your message',
    },
    {
      type: 'submit',
      name: 'Submit',
      value: 'Submit',
    },
  ];

  return (
    <div className='form-editor'>
      <div className='form-controls'>
        {inputTypes.map((type, index) => (
          <button
            type='button'
            className='form-controls__button'
            onClick={(e) =>
              addField({
                ...type,
                fields: formFields,
                setInputs: setAttributes,
              })
            }
            key={index}
          >
            {type.name}
          </button>
        ))}
      </div>
      <div className='form-view'>
        {formFields.map((field) => (
          <InputView key={field.id} {...field} />
        ))}
      </div>
    </div>
  );
};
export default FormsPree;
