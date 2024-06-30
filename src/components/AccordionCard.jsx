import React, { useState } from 'react';
import '../sass/AccordionCard.scss';

function AccordionCard({ reminder, color, onEdit, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="accordion-card">
      <AccordionHeader 
        reminder={reminder.reminder} 
        color={color} 
        onClick={toggleOpen} 
      />
      {isOpen && (
        <AccordionContent 
          reminder={reminder} 
          color={color} 
          onEdit={onEdit} 
          onDelete={onDelete} 
        />
      )}
    </div>
  );
}

const AccordionHeader = ({ reminder, color, onClick }) => (
  <div 
    className="accordion-header" 
    style={{ backgroundColor: color }}
    onClick={onClick}
  >
    <p>{reminder}</p>
  </div>
);

const AccordionContent = ({ reminder, color, onEdit, onDelete }) => (
  <div className="accordion-content" style={{ backgroundColor: color }}>
    <p>{reminder.description}</p>
    <p>{reminder.time}</p>
    <div className="button-container">
      <button className="edit-button" onClick={onEdit}>Editar</button>
      <button className="delete-button" onClick={onDelete}>Eliminar</button>
    </div>
  </div>
);

export default AccordionCard;
