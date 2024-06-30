import React from 'react';
import PropTypes from 'prop-types';
import Label from '../atoms/Label';
import '../../sass/ReminderModal.scss';
const ModalTextarea = ({ label, value, onChange }) => (
  <Label>
    {label}
    <textarea value={value} onChange={onChange} />
  </Label>
);

ModalTextarea.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ModalTextarea;
