import { Button } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
const HeroMediLibrary = (props) => {
  const ALLOWED_MEDIA_TYPES = ['image'];
  const { setAttributes } = props;
  return (
    <div className='hero__upload'>
      <MediaUploadCheck>
        <MediaUpload
          // onSelect={(media) => console.log(media)}
          onSelect={(media) =>
            setAttributes({ imageUrl: media.sizes.full.url, image: media })
          }
          allowedTypes={ALLOWED_MEDIA_TYPES}
          render={({ open }) => (
            <Button type='button' className='btn btn--primary' onClick={open}>
              Open Media Library
            </Button>
          )}
        />
      </MediaUploadCheck>
    </div>
  );
};
export default HeroMediLibrary;
