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
      className='form-block form__container form__container--selection'
      onSubmit={(e) => handleSelection(e)}
    >
      <div className='form-control'>
        <label htmlFor='formUrl' className='form-label'>
          Form url
        </label>
        <input
          type='url'
          id='formUrl'
          placeholder='E.G.: https://username.typeform.com/to/XxXxXXX'
          className='form-input'
        />
        <input
          className='form-button btn btn--primary'
          type='submit'
          value='Add form'
        />
      </div>
    </form>
  );
};
export default FormsSelection;
