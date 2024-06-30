import React from 'react';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';
import '../../sass/AccordionCard.scss';

const AccordionContent = ({ description, time, color, onEdit, onDelete }) => (
  <div className="accordion-content" style={{ backgroundColor: color }}>
    <p>{description}</p>
    <p>{time}</p>
    <div className="button-container">
      <Button className="edit-button" onClick={onEdit}>Editar</Button>
      <Button className="delete-button" onClick={onDelete}>Eliminar</Button>
    </div>
  </div>
);

AccordionContent.propTypes = {
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default AccordionContent;
