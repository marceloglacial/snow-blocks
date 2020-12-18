const FormsPree = (props) => {
  return (
    <form action='https://formspree.io/f/{form_id}' method='post'>
      <label htmlFor='email'>Your Email</label>
      <input name='Email' id='email' type='email' />
      <button type='submit'>Submit</button>
    </form>
  );
};
export default FormsPree;
