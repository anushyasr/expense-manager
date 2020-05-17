import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const SelectWithLabel = ({ label, className, options, selectedValue, changeHandler }) => {
  const inputLabelRef = useRef(null);
  const [inputLabelWidth, setInputLabelWidth] = useState(0);

  useEffect(() => setInputLabelWidth(inputLabelRef.current.offsetWidth), []);

  return (
    <>
      <InputLabel ref={inputLabelRef}>{label}</InputLabel>
      <Select
        labelWidth={inputLabelWidth}
        className={className}
        onChange={(event) => changeHandler(event.target.value)}
        value={selectedValue || 'Please Select'}
      >
        <MenuItem value="Please Select">Please Select</MenuItem>
        {Object.entries(options).map(([key, value]) => (
          <MenuItem key={key} value={key}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

SelectWithLabel.defaultProps = {
  selectedValue: '',
};

SelectWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  changeHandler: PropTypes.func.isRequired,
  selectedValue: PropTypes.string,
};

export default SelectWithLabel;
