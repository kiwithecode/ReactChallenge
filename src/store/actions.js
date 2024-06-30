export const ADD_REMINDER = 'ADD_REMINDER';
export const EDIT_REMINDER = 'EDIT_REMINDER';
export const DELETE_REMINDER = 'DELETE_REMINDER';

export const addReminder = (day, reminder) => ({
  type: ADD_REMINDER,
  payload: { day, reminder }
});

export const editReminder = (day, reminderId, updatedReminder) => ({
  type: EDIT_REMINDER,
  payload: { day, reminderId, updatedReminder }
});

export const deleteReminder = (day, reminderId) => ({
  type: DELETE_REMINDER,
  payload: { day, reminderId }
});
