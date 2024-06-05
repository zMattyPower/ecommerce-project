import React from 'react'
import Select from 'react-select'
import { useState } from "react"

const options = [
  { value: 'xs', label: 'XS' },
  { value: 's', label: 'S' },
  { value: 'm', label: 'M' },
  { value: 'l', label: 'L' },
  { value: 'xl', label: 'XL' }
]

const Taglia = () => (
  <Select 
  defaultValue={{ value: "m", label: "M" }}
  options={options}
  /*value={tagliaSelezionata}
  onChange={handleChange}*/
  required />
)
export default Taglia;