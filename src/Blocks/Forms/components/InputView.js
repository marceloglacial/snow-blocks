const InputView = (props) => {
  const {
    id,
    index,
    type,
    name,
    placeholder,
    value,
    label,
    removeField,
    moveField,
    formFields,
  } = props;
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
        {index !== 0 && (
          <button
            className='form__button form__button--up'
            onClick={() => moveField(index, index - 1)}
          >
            Up
          </button>
        )}
        {index !== formFields.length - 1 && (
          <button
            className='form__button form__button--down'
            onClick={() => moveField(index, index + 1)}
          >
            Down
          </button>
        )}
        <button
          className='form__button form__button--remove'
          onClick={() => removeField(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
export default InputView;
