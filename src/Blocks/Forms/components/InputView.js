const InputView = (props) => {
  const { id, type, name, placeholder, value, label } = props;
  const noLabelItems = ['submit', 'checkbox'];
  const noLabel = noLabelItems.find((item) => item === type);
  const fieldType = {
    textarea: (
      <textarea id={id} type={type} name={name} placeholder={placeholder} />
    ),
    checkbox: (
      <>
        <input type='checkbox' id={id} name={name} defaultValue={value} />
        <label htmlFor={id}>{label || type}</label>
      </>
    ),
  };
  return (
    <div className='form__field'>
      {!noLabel && (
        <label htmlFor={id} className='form__label'>
          {label || type}
        </label>
      )}
      {fieldType[type] || (
        <input
          id={id}
          type={type}
          name={name || type}
          placeholder={placeholder}
          defaultValue={value}
          className={`form__${noLabel ? 'button' : 'input'}`}
        />
      )}
      <div className='form__field-controls'>
        <button>Up</button>
        <button>Down</button>
        <button>Remove</button>
      </div>
    </div>
  );
};
export default InputView;
