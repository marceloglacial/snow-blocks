import { PlainText } from '@wordpress/block-editor';

const InputView = (props) => {
  const {
    id,
    index,
    type,
    name,
    placeholder,
    value,
    required,
    label,
    removeField,
    moveField,
    attributes,
    setAttributes,
  } = props;
  const { formFields } = attributes;
  const noLabelItems = ['submit', 'checkbox'];
  const noLabel = noLabelItems.find((item) => item === type);

  const updateField = (index, content) => {
    const updated = formFields.slice();
    updated[index].label = content;
    return setAttributes({ formFields: [...updated] });
  };

  const fieldType = {
    textarea: (
      <textarea id={id} type={type} name={name} placeholder={placeholder} />
    ),
    checkbox: (
      <>
        <input type='checkbox' id={id} name={name} defaultValue={value} />
        <label htmlFor={id}>
          <PlainText
            defaultValue={label || type}
            onChange={(content) => updateField(index, content)}
          />
        </label>
      </>
    ),
  };

  return (
    <div className='form__field'>
      {!noLabel && (
        <label htmlFor={id} className='form__label'>
          <PlainText
            defaultValue={label || type}
            onChange={(content) => updateField(index, content)}
          />
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
        <input
          type='checkbox'
          id={`isRequired`}
          name={isRequired}
          defaultValue={required}
        />
        <label htmlFor={`isRequired`}>Is Required </label>

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
