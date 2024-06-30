import React from 'react';
import PropTypes from 'prop-types';
import '../../sass/AccordionCard.scss';
const AccordionHeader = ({ title, color, onClick }) => (
  <div 
    className="accordion-header" 
    style={{ backgroundColor: color }}
    onClick={onClick}
  >
    <p>{title}</p>
  </div>
);

AccordionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default AccordionHeader;
