import { Button } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
const ImageMediaLibrary = (props) => {
  const ALLOWED_MEDIA_TYPES = ['image'];
  const { setAttributes } = props;
  return (
    <div className='image__upload'>
      <MediaUploadCheck>
        <MediaUpload
          onSelect={(media) => {
            console.log(media);
            return setAttributes({
              src: media.sizes.full.url,
              alt: media.alt,
              caption: media.caption,
              width: media.width,
              height: media.height,
            });
          }}
          allowedTypes={ALLOWED_MEDIA_TYPES}
          render={({ open }) => (
            <Button type='button' isPrimary onClick={open}>
              Open Media Library
            </Button>
          )}
        />
      </MediaUploadCheck>
    </div>
  );
};
export default ImageMediaLibrary;
