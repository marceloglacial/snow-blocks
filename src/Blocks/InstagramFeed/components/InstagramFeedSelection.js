const InstagramFeedSelection = (props) => {
  const { setAttributes } = props;
  const handleSelection = (e) => {
    e.preventDefault();
    const userID = e.target.formID.value;
    setAttributes({ userID: userID });
  };
  return (
    <form
      className='form__container form__container--selection'
      onSubmit={(e) => handleSelection(e)}
    >
      <label htmlFor='formID' className='form__title'>
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
        className='form__input'
        required
      />
      <input className='form__button' type='submit' value='Add UserID' />
    </form>
  );
};
export default InstagramFeedSelection;
