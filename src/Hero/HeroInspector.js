import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { PanelBody, RadioControl } from '@wordpress/components';

const HeroInspector = (props) => {
  const { attributes, setAttributes } = props;
  const { hasButton, heroStyle, buttonLink } = attributes;
  return (
    <InspectorControls>
      <PanelBody title={__('Style')} initialOpen={true}>
        <RadioControl
          selected={heroStyle}
          options={[
            { label: 'Full', value: 'full' },
            { label: 'Two Columns', value: 'two' },
          ]}
          onChange={(option) => {
            setAttributes({ heroStyle: option });
          }}
        />
      </PanelBody>
      <PanelBody title={__('Action Button')} initialOpen={true}>
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
