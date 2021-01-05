const FormControls = (props) => {
  const { attributes, setAttributes } = props;
  const { formFields } = attributes;
  const inputTypes = [
    {
      type: 'text',
      name: 'Text',
      label: 'Text',
    },
    {
      type: 'password',
      name: 'Password',
      label: 'Password',
    },
    {
      type: 'email',
      name: 'E-mail',
      label: 'E-mail',
      placeholder: 'Type your e-mail',
    },
    {
      type: 'number',
      name: 'Number',
      label: 'Number',
    },
    {
      type: 'file',
      name: 'File',
      label: 'File',
    },
    {
      type: 'url',
      name: 'Url',
      label: 'Url',
      placeholder: 'http://',
    },
    {
      type: 'textarea',
      name: 'Message',
      label: 'Message',
      placeholder: 'Type your message',
    },
    {
      type: 'submit',
      name: 'Submit',
      value: 'Submit',
    },
  ];

  const addField = (props) => {
    const { type, name, label, placeholder } = props;
    const updatedFields = [
      ...formFields,
      { id: formFields.length + 1, type, name, label, placeholder },
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
          {type.name}
        </button>
      ))}
    </div>
  );
};
export default FormControls;
