import { combineReducers } from 'redux';

const contactsReducer = (
  state = JSON.parse(window.localStorage.getItem('localContacts')) ?? [],
  { type, payload },
) => {
  switch (type) {
    case 'AddNewContacts':
      return [...state, payload];
    case 'DeleteContact':
      return state.filter(contact => contact.id !== payload);
    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case 'Changefilter':
      return payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
