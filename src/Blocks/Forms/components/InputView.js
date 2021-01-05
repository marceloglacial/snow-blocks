const InputView = (props) => {
  const { id, type, name, value } = props;
  return (
    <div className='form__control'>
      <label>{name}</label>
      <input id={id} type={type} name={name} defaultValue={value} />
    </div>
  );
};
export default InputView;
