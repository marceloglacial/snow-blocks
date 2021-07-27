const ImageView = (props) => {
  const { attributes } = props;
  const { media, imageSize, imageAlignment } = attributes;
  const { url } = media?.sizes[imageSize];
  const { alt, caption } = media;
  return (
    <figure className={`align-${imageAlignment}`}>
      <img src={url} alt={alt} className='figure__image' loading='lazy' />
      {caption && <figcaption dangerouslySetInnerHTML={{ __html: caption }} />}
    </figure>
  );
};
export default ImageView;
