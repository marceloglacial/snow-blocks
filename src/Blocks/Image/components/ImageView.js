const ImageView = (props) => {
  const { attributes } = props;
  const { media, imageSize, imageAlignment } = attributes;
  const { url, width, height } = media?.sizes[imageSize];
  const { alt, caption } = media;
  return (
    <figure className={`align-${imageAlignment}`}>
      <img
        src={url}
        alt={alt}
        width={width}
        height={height}
        className='figure__image'
        loading='lazy'
      />
      {caption && <figcaption dangerouslySetInnerHTML={{ __html: caption }} />}
    </figure>
  );
};
export default ImageView;
