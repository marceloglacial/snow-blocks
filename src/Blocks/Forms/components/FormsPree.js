import { useState } from 'react';

const FormsPree = (props) => {
  const { attributes, setAttributes } = props;
  const { formUrl } = attributes;
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
      <h3>Formspree</h3>
      <input name='url' id='url' type='url' defaultValue={formUrl} />
    </div>
  );
};
export default FormsPree;
