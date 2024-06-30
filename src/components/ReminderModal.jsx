import React, { useState, useEffect } from 'react';
import '../sass/ReminderModal.scss';

function ReminderModal({ isOpen, onClose, onSave, initialReminder }) {
  const [reminder, setReminder] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (initialReminder) {
      setReminder(initialReminder.reminder);
      setTime(initialReminder.time);
      setDescription(initialReminder.description);
    } else {
      setReminder('');
      setTime('');
      setDescription('');
    }
  }, [initialReminder, isOpen]);

  const handleSave = () => {
    onSave({ reminder, time, description });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{initialReminder ? 'Editar Recordatorio' : 'Agregar Recordatorio'}</h2>
        <label>
          Recordatorio:
          <input 
            type="text" 
            value={reminder} 
            onChange={(e) => setReminder(e.target.value)} 
          />
        </label>
        <label>
          Hora:
          <input 
            type="time" 
            value={time} 
            onChange={(e) => setTime(e.target.value)} 
          />
        </label>
        <label>
          Descripción:
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
        </label>
        <div className="modal-buttons">
          <button onClick={handleSave}>Guardar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default ReminderModal;
