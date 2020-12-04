const HeroCloseButton = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.setAttributes({ imageUrl: undefined });
  };
  return (
    <div className='hero__close'>
      <button
        type='button'
        className='hero__button hero__button--close'
        aria-label='Close'
        onClick={(e) => handleClick(e)}
      >
        <span aria-hidden='true'>&times;</span>
      </button>
    </div>
  );
};
export default HeroCloseButton;
