const HeroImage = (props) => {
  const { imageUrl } = props.attributes;
  return <img src={imageUrl} />;
};
export default HeroImage;
