const FormsSelection = (props) => {
  const { setAttributes } = props;
  const handleSelection = (e) => {
    e.preventDefault();
    const url = e.target.formUrl.value;
    const domain = new URL(url).pathname;
    setAttributes({ formKey: domain.split('/to/')[1] });
    setAttributes({ formUrl: url });
  };
  return (
    <form
      className='form__container form__container--selection'
      onSubmit={(e) => handleSelection(e)}
    >
      <label htmlFor='formUrl' className='form__title'>
        TypeForm Form url
      </label>
      <input
        type='url'
        id='formUrl'
        placeholder='E.G.: https://username.typeform.com/to/XxXxXXX'
        className='form__input'
      />
      <input className='form__button' type='submit' value='Add form' />
    </form>
  );
};
export default FormsSelection;
