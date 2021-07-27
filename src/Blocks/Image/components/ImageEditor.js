import ImageMediaLibrary from './ImageMediaLibrary';
import { RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

import '../Image.scss';

const ImageEditor = (props) => {
  const { attributes, setAttributes } = props;
  const { src, alt, caption, width, height, className } = attributes;
  if (!src) return <ImageMediaLibrary {...props} />;

  return (
    <figure className='image__editor'>
      <Button
        className='image__button'
        isPrimary
        onClick={() => setAttributes({ src: '' })}
      >
        X
      </Button>
      <img
        src={src}
        alt={alt}
        className={className}
        width={width || 800}
        height={height || 600}
        loading='lazy'
      />
      <RichText
        tagName='figcaption'
        placeholder={'Add caption'}
        value={caption}
        allowedFormats={[]}
        onChange={(val) => setAttributes({ caption: val })}
      />
    </figure>
  );
};
export default ImageEditor;
