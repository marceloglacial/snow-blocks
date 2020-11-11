import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { PanelBody, RadioControl } from '@wordpress/components';

const HeroInspector = (props) => {
  const { attributes, setAttributes } = props;
  const { hasButton, heroStyle, imagePosition } = attributes;
  return (
    <InspectorControls>
      <PanelBody
        title={__('Style')}
        initialOpen={true}
        className='hero__inspector hero__inspector--style'
      >
        <RadioControl
          selected={heroStyle}
          options={[
            { label: 'Full', value: 'full' },
            { label: 'Split', value: 'split' },
          ]}
          onChange={(option) => {
            setAttributes({ heroStyle: option });
          }}
        />
      </PanelBody>
      {heroStyle === 'split' && (
        <PanelBody
          title={__('Image Position')}
          initialOpen={true}
          className='hero__inspector hero__inspector--image'
        >
          <RadioControl
            selected={imagePosition}
            options={[
              { label: 'Right', value: 'right' },
              { label: 'Left', value: 'left' },
            ]}
            onChange={(option) => {
              setAttributes({ imagePosition: option });
            }}
          />
        </PanelBody>
      )}
      <PanelBody
        title={__('Action Button')}
        initialOpen={true}
        className='hero__inspector hero__inspector--button'
      >
        <RadioControl
          selected={hasButton}
          options={[
            { label: 'Hide', value: 'no' },
            { label: 'Show', value: 'yes' },
          ]}
          onChange={(option) => {
            setAttributes({ hasButton: option });
          }}
        />
      </PanelBody>
    </InspectorControls>
  );
};
export default HeroInspector;
