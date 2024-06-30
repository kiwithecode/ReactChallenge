import { ADD_REMINDER, EDIT_REMINDER, DELETE_REMINDER } from '../store/actions';

const initialState = {};

const remindersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REMINDER:
      const { day, reminder } = action.payload;
      return {
        ...state,
        [day]: [...(state[day] || []), { ...reminder, id: new Date().getTime() }]
      };
    case EDIT_REMINDER:
      const { reminderId, updatedReminder } = action.payload;
      return {
        ...state,
        [action.payload.day]: state[action.payload.day].map(reminder =>
          reminder.id === reminderId ? { ...reminder, ...updatedReminder } : reminder
        )
      };
    case DELETE_REMINDER:
      return {
        ...state,
        [action.payload.day]: state[action.payload.day].filter(reminder => reminder.id !== action.payload.reminderId)
      };
    default:
      return state;
  }
};

export default remindersReducer;
