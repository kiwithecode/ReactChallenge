import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, value, onChange }) => (
  <input type={type} value={value} onChange={onChange} />
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Input;
