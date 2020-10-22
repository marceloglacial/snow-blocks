import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { PanelBody, RadioControl } from '@wordpress/components';

const HeroInspector = (props) => {
  const { hasButton } = props.attributes;
  return (
    <InspectorControls>
      <PanelBody title={__('Action Button')} initialOpen={true}>
        <RadioControl
          selected={hasButton}
          options={[
            { label: 'Show', value: 'yes' },
            { label: 'Hide', value: 'no' },
          ]}
          onChange={(option) => {
            props.setAttributes({ hasButton: option });
          }}
        />
      </PanelBody>
    </InspectorControls>
  );
};
export default HeroInspector;
