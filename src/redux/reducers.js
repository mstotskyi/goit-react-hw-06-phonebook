import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const contactsReducer = createReducer(
  [],
  // JSON.parse(window.localStorage.getItem('localContacts')) ?? [],
  {
    [actions.addNewCntacts]: (state, { payload }) => [...state, payload],
    [actions.deleteContact]: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
  },
);

const filterReducer = createReducer('', {
  [actions.changefilter]: (_, { payload }) => payload,
});

// const contactsReducer = (
//   state = JSON.parse(window.localStorage.getItem('localContacts')) ?? [],
//   { type, payload },
// ) => {
//   switch (type) {
//     case 'AddNewContacts':
//       return [...state, payload];
//     case 'DeleteContact':
//       return state.filter(contact => contact.id !== payload);
//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case 'Changefilter':
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
