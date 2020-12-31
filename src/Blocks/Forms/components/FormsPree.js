import { useState } from 'react';
import addField from '../functions/addField';

const FormsPree = (props) => {
  const { attributes, setAttributes } = props;
  const { formTitle, formUrl, formFields } = attributes;
  const [url, setUrl] = useState(formUrl);
  const handleUrl = (e) => setUrl(e);
  const handleSetUrl = (e) => setAttributes({ formUrl: url });

  if (!formUrl)
    return (
      <div className='snowforms'>
        <label className='forms__label' htmlFor='url'>
          <h3>Form endpoint</h3>
        </label>
        <input
          name='url'
          id='url'
          type='url'
          className='forms__input'
          onChange={(e) => handleUrl(e.target.value)}
        />
        <button className='forms__button' onClick={(e) => handleSetUrl(e)}>
          Submit
        </button>
      </div>
    );

  return (
    <div className='snowforms'>
      <h3>{formTitle || 'Create Title Component'}</h3>
      <input name='url' id='url' type='url' defaultValue={formUrl} />
      <button
        type='button'
        onClick={(e) =>
          addField(
            formFields.length + 1,
            'text',
            'Name',
            '',
            formFields,
            setAttributes,
            e
          )
        }
      >
        Add Input
      </button>
    </div>
  );
};
export default FormsPree;
