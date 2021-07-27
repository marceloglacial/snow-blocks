import ImageMediaLibrary from './ImageMediaLibrary';
import { RichText, InspectorControls } from '@wordpress/block-editor';
import { Button, Panel, PanelBody, RadioControl } from '@wordpress/components';

import '../Image.scss';

const ImageEditor = (props) => {
  const { attributes, setAttributes } = props;
  const { media, imageSize, imageAlignment } = attributes;
  const { url } = media?.sizes[imageSize];

  if (!url) return <ImageMediaLibrary {...props} />;
  const { alt, caption } = media;

  return (
    <figure className={`align-${imageAlignment} image__editor`}>
      <InspectorControls>
        <Panel header='Image'>
          <PanelBody title='Image size' initialOpen={true}>
            <RadioControl
              selected={imageSize}
              options={[
                { label: 'Full', value: 'full' },
                { label: 'Large', value: 'large' },
                { label: 'Medium', value: 'medium' },
                { label: 'Thumbnail', value: 'thumbnail' },
              ]}
              onChange={(value) => setAttributes({ imageSize: value })}
            />
          </PanelBody>
          <PanelBody title='Image lignment' initialOpen={true}>
            <RadioControl
              selected={imageAlignment}
              options={[
                { label: 'Left', value: 'left' },
                { label: 'Center', value: 'center' },
                { label: 'Right', value: 'right' },
              ]}
              onChange={(value) => setAttributes({ imageAlignment: value })}
            />
          </PanelBody>
        </Panel>
      </InspectorControls>
      <Button
        className='image__button'
        isPrimary
        onClick={() => {
          const reset = {
            sizes: {
              [imageSize]: { url: '' },
            },
          };
          return setAttributes({ media: reset });
        }}
      >
        X
      </Button>
      <img src={url} alt={alt} className='figure__image' loading='lazy' />
      <RichText
        tagName='figcaption'
        placeholder={'Add caption'}
        value={caption}
        allowedFormats={[]}
        onChange={(value) => {
          const result = { ...attributes };
          result.media['caption'] = value;
          return setAttributes({ result });
        }}
      />
    </figure>
  );
};
export default ImageEditor;
