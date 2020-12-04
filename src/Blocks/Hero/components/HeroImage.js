const HeroImage = (props) => {
  const { imageUrl, imageStyle, imageAlt } = props.attributes;

  if (!imageUrl) return null;

  return (
    <img
      src={imageUrl}
      alt={imageAlt || ''}
      className={`hero__image ${imageStyle}`}
    />
  );
};
export default HeroImage;
