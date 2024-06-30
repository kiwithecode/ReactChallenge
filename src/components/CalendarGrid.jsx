import React from 'react';
import PropTypes from 'prop-types';

const CalendarGrid = ({ daysArray, dayNames, reminders, reminderColors, onDayClick, onAddReminder }) => {
  // Definir getRandomColor dentro de CalendarGrid
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    return `#${Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).join('')}`;
  };

  return (
    <div className="calendar-grid">
      <div className="day-names">
        {dayNames.map(day => (
          <div key={day} className="day-name">{day}</div>
        ))}
      </div>
      {daysArray.map(day => (
        <div key={day} className="calendar-day" onClick={() => onDayClick(day)}>
          <span>{day}</span>
          <div className="reminder-container">
            {reminders[day]?.map((reminder, index) => (
              <div 
                key={index} 
                className="reminder" 
                style={{ backgroundColor: reminderColors[reminder.id] || getRandomColor() }}
              ></div>
            ))}
          </div>
          <button 
            className="add-reminder-button" 
            onClick={(event) => onAddReminder(day, event)}
          >
            +
          </button>
        </div>
      ))}
    </div>
  );
};

CalendarGrid.propTypes = {
  daysArray: PropTypes.array.isRequired,
  dayNames: PropTypes.array.isRequired,
  reminders: PropTypes.object.isRequired,
  reminderColors: PropTypes.object.isRequired,
  onDayClick: PropTypes.func.isRequired,
  onAddReminder: PropTypes.func.isRequired
};

export default CalendarGrid;
