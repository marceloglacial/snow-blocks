import useMedia from '../../../functions/useMedia';

const PostListImage = (props) => {
  const { media, isLoading } = useMedia(props.featured_media);
  if (isLoading) return 'loading ...';
  const imageUrl = media.source_url;
  return (
    <img
      src={imageUrl}
      className='card__image'
      alt='...'
      width='200'
      height='100'
    />
  );
};

export default PostListImage;
