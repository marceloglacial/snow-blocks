const HeroImage = (props) => {
  const { imageUrl, imageStyle, imageAlt } = props.attributes;
  return <img src={imageUrl} alt={imageAlt || ''} className={imageStyle} />;
};
export default HeroImage;
