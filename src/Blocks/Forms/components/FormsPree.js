import { useState } from 'react';

const FormsPree = (props) => {
  const { attributes, setAttributes } = props;
  const { formUrl } = attributes;
  const [url, setUrl] = useState(formUrl);
  const handleUrl = (e) => setUrl(e);
  const handleSetUrl = (e) => setAttributes({ formUrl: url });

  if (!formUrl)
    return (
      <>
        <label htmlFor='url'>Form endpoint</label>
        <input
          name='url'
          id='url'
          type='url'
          onChange={(e) => handleUrl(e.target.value)}
        />
        <button onClick={(e) => handleSetUrl(e)}>Submit</button>
      </>
    );

  return (
    <form action={formUrl} method='post'>
      <h3>Formspree</h3>
      <label htmlFor='email'>Your Email</label>
      <input name='Email' id='email' type='email' />
      <button type='submit'>Submit</button>
    </form>
  );
};
export default FormsPree;
