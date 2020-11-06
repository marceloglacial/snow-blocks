const HeroCloseButton = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.setAttributes({ imageUrl: undefined });
  };
  return (
    <div className='hero-close container'>
      <button
        type='button'
        className='hero-close__button close'
        aria-label='Close'
        onClick={(e) => handleClick(e)}
      >
        <span aria-hidden='true'>&times;</span>
      </button>
    </div>
  );
};
export default HeroCloseButton;
