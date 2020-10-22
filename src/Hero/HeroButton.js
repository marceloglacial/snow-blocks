const HeroButton = (props) => {
  const { buttonText, buttonLink } = props.attributes;
  return (
    <a className='btn btn-primary' href={buttonLink} role='button'>
      {buttonText}
    </a>
  );
};
export default HeroButton;
