const InstagramPostSelecion = (props) => {
  const { setAttributes } = props;
  const handleSelection = (e) => {
    e.preventDefault();
    const url = e.target.formUrl.value;
    setAttributes({ url: url });
  };
  return (
    <form
      className='form__container form__container--selection'
      onSubmit={(e) => handleSelection(e)}
    >
      <label htmlFor='formUrl' className='form__title'>
        Instagram Post URL
      </label>
      <input
        type='url'
        id='formUrl'
        placeholder='https://'
        className='form__input'
      />
      <input className='form__button' type='submit' value='Add form' />
    </form>
  );
};
export default InstagramPostSelecion;
