const addField = (props) => {
  const { type, name, label, placeholder, fields, setInputs } = props;
  const updatedFields = [
    ...fields,
    { id: fields.length + 1, type, name, label, placeholder },
  ];
  return setInputs({ formFields: updatedFields });
};
export default addField;
