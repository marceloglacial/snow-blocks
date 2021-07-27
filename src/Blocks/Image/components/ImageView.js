const ImageView = (props) => {
  const { src, alt, caption } = props.attributes;
  return (
    <figure>
      <img src={src} alt={alt} loading='lazy' />
      {caption && <figcaption dangerouslySetInnerHTML={{ __html: caption }} />}
    </figure>
  );
};
export default ImageView;
