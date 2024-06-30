import React from 'react';
import PropTypes from 'prop-types';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

const ModalInput = ({ label, type, value, onChange }) => (
  <Label>
    {label}
    <Input type={type} value={value} onChange={onChange} />
  </Label>
);

ModalInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ModalInput;
