const FormsSelection = (props) => {
  const { setAttributes, forms } = props;
  const allTypes = Object.entries(forms);

  const handleSelection = (value) => {
    setAttributes({ formType: value });
  };

  return (
    <div className='forms-selection snowforms'>
      <h3 className='forms-selection__title'>Choose Your Form:</h3>
      <form>
        <select onChange={(e) => handleSelection(e.target.value)}>
          <option value=''>---- choose one ----</option>
          {allTypes.map((item, index) => (
            <option value={item[0]} key={index}>
              {item[1].title}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};
export default FormsSelection;
