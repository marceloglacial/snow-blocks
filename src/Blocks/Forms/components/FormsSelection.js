const FormsSelection = (props) => {
  const { setAttributes } = props;
  const handleSelection = (e) => {
    e.preventDefault();
    setAttributes({ formUrl: e.target.formUrl.value });
  };
  return (
    <form
      className='form__container form__container--selection'
      onSubmit={(e) => handleSelection(e)}
    >
      <label htmlFor='formUrl' className='form__title'>
        URL Form Endpoint:
      </label>
      <input
        type='url'
        id='formUrl'
        placeholder='E.G.: https://formspree.io/f/xxxxxxx'
        className='form__input'
      />
      <input className='form__button' type='submit' value='Add form' />
    </form>
  );
};
export default FormsSelection;
