import { v4 as uuidv4 } from 'uuid';

const FormControls = (props) => {
  const { attributes, setAttributes } = props;
  const { formFields } = attributes;
  const inputTypes = [
    {
      type: 'text',
    },
    {
      type: 'password',
    },
    {
      type: 'email',
      label: 'E-mail',
    },
    {
      type: 'number',
    },
    {
      type: 'file',
    },
    {
      type: 'url',
      placeholder: 'http://',
    },
    {
      type: 'textarea',
    },
    // {
    //   type: 'checkbox',
    // },
    {
      type: 'submit',
    },
  ];

  const addField = (props) => {
    const { type, name, label, placeholder } = props;
    const updatedFields = [
      ...formFields,
      { id: uuidv4(), type, name, label, placeholder },
    ];
    return setAttributes({ formFields: updatedFields });
  };

  return (
    <div className='form__container form__container--controls'>
      <div className='form__title'>Add form field</div>
      {inputTypes.map((type, index) => (
        <button
          type='button'
          className='form__button'
          onClick={(e) => addField(type)}
          key={index}
        >
          {type.label || type.type}
        </button>
      ))}
    </div>
  );
};
export default FormControls;
