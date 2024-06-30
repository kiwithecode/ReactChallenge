import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addReminder, deleteReminder, editReminder } from '../store/actions';
import ReminderModal from '../components/ReminderModal';
import '../sass/Calendar.scss';
import '../sass/ReminderModal.scss';

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function Calendar() {
  const reminders = useSelector(state => state.reminders);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedReminder, setSelectedReminder] = useState(null);

  const daysInMonth = new Date().getDate();
  const daysArray = [...Array(daysInMonth).keys()].map(day => day + 1);

  const handleAddReminder = (day) => {
    setSelectedDay(day);
    setSelectedReminder(null);
    setIsModalOpen(true);
  };

  const handleSaveReminder = ({ reminder, time }) => {
    if (selectedReminder) {
      dispatch(editReminder(selectedDay, selectedReminder.id, { reminder, time }));
    } else {
      dispatch(addReminder(selectedDay, { reminder, time }));
    }
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const handleEditReminder = (reminder) => {
    setSelectedReminder(reminder);
    setIsModalOpen(true);
  };

  const handleDeleteReminder = (reminderId) => {
    dispatch(deleteReminder(selectedDay, reminderId));
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className="calendar-container">
      <button className="button-toggle" onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
      <div className="calendar-content">
        <div className="calendar-grid">
          <div className="day-names">
            {dayNames.map(day => (
              <div key={day} className="day-name">{day}</div>
            ))}
          </div>
          {daysArray.map(day => (
            <div key={day} className="calendar-day" onClick={() => handleDayClick(day)}>
              <span>{day}</span>
              {reminders[day] && reminders[day].map((reminder, index) => (
                <div key={index} className="reminder" style={{ backgroundColor: getRandomColor() }}></div>
              ))}
              <button className="add-reminder-button" onClick={() => handleAddReminder(day)}>+</button>
            </div>
          ))}
        </div>
        <div className="reminder-list">
          <h2>Reminders for {selectedDay}</h2>
          {reminders[selectedDay] && reminders[selectedDay].map((reminder, index) => (
            <div key={index} className="reminder-card">
              <p>{reminder.reminder}</p>
              <p>{reminder.time}</p>
              <button className="edit-button" onClick={() => handleEditReminder(reminder)}>Edit</button>
              <button className="delete-button" onClick={() => handleDeleteReminder(reminder.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
      <ReminderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={handleSaveReminder} 
        initialReminder={selectedReminder} 
      />
    </div>
  );
}

export default Calendar;
