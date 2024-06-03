import React from 'react'
import Select from 'react-select'


const options = [
  { value: 'xs', label: 'XS' },
  { value: 's', label: 'S' },
  { value: 'm', label: 'M' },
  { value: 'l', label: 'L' },
  { value: 'xl', label: 'XL' }
]

const Taglia = () => (
  <Select options={options} />
)
export default Taglia;