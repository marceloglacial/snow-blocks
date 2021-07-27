const ImageView = (props) => {
  const { src, alt, caption, width, height, className } = props.attributes;
  return (
    <figure>
      <img
        src={src}
        alt={alt}
        className={className}
        width={width || 800}
        height={height || 600}
        loading='lazy'
      />
      {caption && <figcaption dangerouslySetInnerHTML={{ __html: caption }} />}
    </figure>
  );
};
export default ImageView;
