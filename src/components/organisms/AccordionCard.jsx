import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AccordionHeader from '../molecules/AccordionHeader';
import AccordionContent from '../molecules/AccordionContent';
import '../../sass/ReminderModal.scss';

const AccordionCard = ({ reminder, color, onEdit, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="accordion-card">
      <AccordionHeader title={reminder.reminder} color={color} onClick={toggleOpen} />
      {isOpen && (
        <AccordionContent 
          description={reminder.description} 
          time={reminder.time} 
          color={color} 
          onEdit={onEdit} 
          onDelete={onDelete} 
        />
      )}
    </div>
  );
};

AccordionCard.propTypes = {
  reminder: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default AccordionCard;
