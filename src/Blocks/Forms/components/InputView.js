const InputView = (props) => {
  const { id, type, name, placeholder, value, label } = props;
  const fieldType = {
    textarea: (
      <textarea id={id} type={type} name={name} placeholder={placeholder} />
    ),
  };
  return (
    <div className='form__field'>
      {label && <label className='form__label'>{label}</label>}
      {fieldType[type] || (
        <input
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          defaultValue={value}
        />
      )}
    </div>
  );
};
export default InputView;
