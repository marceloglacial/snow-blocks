const addField = (formId, formType, formName, formValue, fields, setInputs) => {
  const updatedFields = [
    ...fields,
    { id: formId, type: formType, name: formName, value: formValue },
  ];
  return setInputs({ formFields: updatedFields });
};
export default addField;
