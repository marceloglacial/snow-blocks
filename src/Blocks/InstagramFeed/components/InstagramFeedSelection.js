const InstagramFeedSelection = (props) => {
  const { setAttributes } = props;
  const handleSelection = (e) => {
    e.preventDefault();
    const userID = e.target.formID.value;
    setAttributes({ userID: userID });
  };
  return (
    <div className='instagram-feed__selection'>
      <form className='form__container' onSubmit={(e) => handleSelection(e)}>
        <div className='form-control'>
          <label
            htmlFor='formID'
            className='form-label instagram-feed__form-title'
          >
            Instagram User ID (
            <a
              href='https://www.instafollowers.co/find-instagram-user-id'
              target='_blank'
            >
              Find yours here
            </a>
            )
          </label>
          <input
            type='text'
            id='formID'
            placeholder='Ex: 530654'
            className='form-input'
            required
          />
        </div>
        <div className='form-control'>
          <input
            className='form-submit btn btn--primary'
            type='submit'
            value='Add UserID'
          />
        </div>
      </form>
    </div>
  );
};
export default InstagramFeedSelection;
