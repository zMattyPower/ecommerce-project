import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'xs', label: 'XS' },
  { value: 's', label: 'S' },
  { value: 'm', label: 'M' },
  { value: 'l', label: 'L' },
  { value: 'xl', label: 'XL' }
];

const Taglia = ({ setTaglia, tagliaSelezionata }) => {
  const handleChange = (selectedOption) => {
    setTaglia(selectedOption.value);
  };

  return (
    <Select 
      defaultValue={options.find(option => option.value === tagliaSelezionata)}
      options={options}
      value={options.find(option => option.value === tagliaSelezionata)}
      onChange={handleChange}
      required
    />
  );
};

export default Taglia;