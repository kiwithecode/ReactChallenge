import React, { useState, useEffect } from 'react';
import '../sass/ReminderModal.scss';

function ReminderModal({ isOpen, onClose, onSave, initialReminder }) {
  const [reminder, setReminder] = useState(initialReminder ? initialReminder.reminder : '');
  const [time, setTime] = useState(initialReminder ? initialReminder.time : '');
  const [description, setDescription] = useState(initialReminder ? initialReminder.description : '');

  useEffect(() => {
    if (initialReminder) {
      setReminder(initialReminder.reminder);
      setTime(initialReminder.time);
    }
  }, [initialReminder]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({ reminder, time });
    setReminder('');
    setTime('');
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{initialReminder ? 'Edit Reminder' : 'Add Reminder'}</h2>
        <input 
          type="text" 
          value={reminder} 
          onChange={(e) => setReminder(e.target.value)} 
          maxLength="30" 
          placeholder="Enter reminder" 
        />
        <input 
          type="time" 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
          placeholder="Enter time" 
        />
        <textarea 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default ReminderModal;
