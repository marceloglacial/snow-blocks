import FormControls from './FormControls';
import InputView from './InputView';

const FormEditor = (props) => {
  const { attributes, setAttributes } = props;
  const { formFields } = attributes;

  const removeField = (id) => {
    const updatedFields = formFields.filter((field) => field.id !== id);
    return setAttributes({ formFields: updatedFields });
  };
  const moveField = (from, to) => {
    const updatedFields = formFields;
    updatedFields.splice(to, 0, updatedFields.splice(from, 1)[0]);
    return setAttributes({ formFields: [...updatedFields] });
  };
  const inputControls = { removeField, moveField };

  return (
    <div className='form'>
      <FormControls {...props} />
      <div className='form__container form__container--view'>
        <div className='form__title'>Form View</div>
        {formFields.map((field, index) => {
          const fieldProps = {
            index,
            formFields,
            ...field,
            ...inputControls,
          };
          return <InputView key={field.id} {...fieldProps} />;
        })}
      </div>
    </div>
  );
};
export default FormEditor;
