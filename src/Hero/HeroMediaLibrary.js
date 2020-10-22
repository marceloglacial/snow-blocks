import { Button } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
const HeroMediLibrary = (props) => {
  const ALLOWED_MEDIA_TYPES = ['image'];
  const { setAttributes } = props;
  return (
    <div className='hero-upload py-5 d-flex justify-content-center  align-items-center'>
      <MediaUploadCheck>
        <MediaUpload
          // onSelect={(media) => console.log(media)}
          onSelect={(media) =>
            setAttributes({ imageUrl: media.sizes.full.url })
          }
          allowedTypes={ALLOWED_MEDIA_TYPES}
          render={({ open }) => (
            <Button type='button' className='btn btn-primary' onClick={open}>
              Open Media Library
            </Button>
          )}
        />
      </MediaUploadCheck>
    </div>
  );
};
export default HeroMediLibrary;
