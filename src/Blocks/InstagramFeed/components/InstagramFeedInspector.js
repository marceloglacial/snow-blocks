import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RadioControl } from '@wordpress/components';

const InstagramFeedInspector = (props) => {
  const { attributes, setAttributes } = props;
  const { itemsNumber, imageType } = attributes;

  return (
    <InspectorControls>
      <PanelBody title='Number of Posts'>
        <input
          type='number'
          min={1}
          max={20}
          defaultValue={itemsNumber}
          onChange={(e) => setAttributes({ itemsNumber: e.target.value })}
        />
      </PanelBody>
      <PanelBody title='Image Type'>
        <RadioControl
          selected={imageType}
          options={[
            { label: 'Default', value: 'default' },
            { label: 'Thumbnail', value: 'thumbnail' },
          ]}
          onChange={(option) => {
            setAttributes({ imageType: option });
          }}
        />
      </PanelBody>
    </InspectorControls>
  );
};
export default InstagramFeedInspector;
