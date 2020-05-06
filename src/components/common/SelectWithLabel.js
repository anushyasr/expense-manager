import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const SelectWithLabel = ({ label, className, options }) => {
  const inputLabelRef = useRef(null);
  const [inputLabelWidth, setInputLabelWidth] = useState(0);

  useEffect(() => setInputLabelWidth(inputLabelRef.current.offsetWidth), []);

  return (
    <>
      <InputLabel ref={inputLabelRef} htmlFor="outlined-Name">
        {label}
      </InputLabel>
      <Select labelWidth={inputLabelWidth} className={className}>
        <MenuItem value="Please Select">
          <em>None</em>
        </MenuItem>
        {Object.entries(options).map((key, value) => (
          <MenuItem key={key} value={key}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

SelectWithLabel.defaultProps = {};

SelectWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  options: PropTypes.shape.isRequired,
};

export default SelectWithLabel;
