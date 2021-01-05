import FormControls from './FormControls';
import InputView from './InputView';

const FormEditor = (props) => {
  const { attributes } = props;
  const { formFields } = attributes;

  return (
    <div className='form'>
      <FormControls {...props} />
      <div className='form__container form__container--view'>
        <div className='form__title'>Form View</div>
        {formFields.map((field) => (
          <InputView key={field.id} {...field} />
        ))}
      </div>
    </div>
  );
};
export default FormEditor;
