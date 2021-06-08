import { useState } from 'react';
import { PlainText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

const SiteSelection = (props) => {
  const { setAttributes } = props;
  const [typeKey, setTypeKey] = useState();
  const handleSave = (e) => {
    e.preventDefault();
    setAttributes({ hubSpotApiKey: typeKey });
  };

  return (
    <div className='hubspot__selection'>
      <h2>HubSpot Credentials</h2>
      <PlainText
        placeholder={'Hubspot API key'}
        onChange={(val) => setTypeKey(val)}
      />
      <Button onClick={(e) => handleSave(e)} isPrimary>
        Save
      </Button>
    </div>
  );
};

export default SiteSelection;
