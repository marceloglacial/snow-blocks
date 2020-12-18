import { useState, useEffect } from 'react';
import FormsPree from './FormsPree';

const FormsSelection = (props) => {
  const { attributes, setAttributes } = props;
  const { url, forms } = attributes;
  const [isSelected, setIsSelected] = useState('');

  // TODO: Add it to WP options
  useEffect(() => {
    return setAttributes({
      forms: [
        {
          title: 'Formspree',
          component: <FormsPree {...props} />,
        },
      ],
    });
  }, []);

  const handleSelection = (value) => {
    setIsSelected(value);
  };

  if (isSelected)
    return forms.find((item) => item.title === isSelected).component;

  return (
    <div className='forms-selection'>
      <h3 className='forms-selection__title'>Choose Your Form:</h3>
      <form>
        <select onChange={(e) => handleSelection(e.target.value)}>
          <option value=''>---- choose one ----</option>
          {forms.map((item, index) => (
            <option key={index}>{item.title}</option>
          ))}
        </select>
      </form>
    </div>
  );
};
export default FormsSelection;
