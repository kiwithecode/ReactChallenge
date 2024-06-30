import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addReminder, deleteReminder, editReminder } from '../store/actions';
import ReminderModal from '../components/ReminderModal';
import AccordionCard from '../components/AccordionCard';
import '../sass/Calendar.scss';
import '../sass/ReminderModal.scss';

const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

// Mueve la función getRandomColor fuera del componente
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  return `#${Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).join('')}`;
};

function Calendar() {
  const reminders = useSelector(state => state.reminders);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedReminder, setSelectedReminder] = useState(null);
  const [reminderColors, setReminderColors] = useState({});

  const daysInMonth = new Date().getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handleAddReminder = (day, event) => {
    event.stopPropagation(); // Evita que el evento se propague al cuadro
    setSelectedDay(day);
    setSelectedReminder(null);
    setIsModalOpen(true);
  };

  const handleSaveReminder = ({ reminder, time, description }) => {
    if (selectedReminder) {
      dispatch(editReminder(selectedDay, selectedReminder.id, { reminder, time, description }));
    } else {
      const newReminderId = Date.now();
      dispatch(addReminder(selectedDay, { reminder, time, description, id: newReminderId }));
      setReminderColors(prevColors => ({
        ...prevColors,
        [newReminderId]: getRandomColor()
      }));
    }
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setSelectedReminder(null); // Asegúrate de limpiar el recordatorio seleccionado
  };

  const handleEditReminder = (reminder) => {
    setSelectedReminder(reminder);
    setIsModalOpen(true);
  };

  const handleDeleteReminder = (reminderId) => {
    dispatch(deleteReminder(selectedDay, reminderId));
    setReminderColors(prevColors => {
      const newColors = { ...prevColors };
      delete newColors[reminderId];
      return newColors;
    });
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className="calendar-container">
      <button className="button-toggle" onClick={toggleDarkMode}>
        Modo Oscuro
      </button>
      <div className="calendar-content">
        <CalendarGrid 
          daysArray={daysArray} 
          dayNames={dayNames} 
          reminders={reminders} 
          reminderColors={reminderColors} 
          onDayClick={handleDayClick} 
          onAddReminder={handleAddReminder} 
        />
        <ReminderList 
          selectedDay={selectedDay} 
          reminders={reminders[selectedDay]} 
          reminderColors={reminderColors} 
          onEditReminder={handleEditReminder} 
          onDeleteReminder={handleDeleteReminder} 
        />
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

const CalendarGrid = ({ daysArray, dayNames, reminders, reminderColors, onDayClick, onAddReminder }) => (
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

const ReminderList = ({ selectedDay, reminders, reminderColors, onEditReminder, onDeleteReminder }) => (
  <div className="reminder-list">
    <h2>Recordatorios para {selectedDay}</h2>
    {reminders?.map((reminder, index) => (
      <AccordionCard 
        key={index} 
        reminder={reminder} 
        color={reminderColors[reminder.id]} 
        onEdit={() => onEditReminder(reminder)}
        onDelete={() => onDeleteReminder(reminder.id)}
      />
    ))}
  </div>
);

export default Calendar;
