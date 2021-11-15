import { createAction } from '@reduxjs/toolkit';

export const addNewCntacts = createAction('AddNewContacts');
export const deleteContact = createAction('DeleteContact');
export const changefilter = createAction('Changefilter');

// export const addNewCntacts = value => ({
//   type: 'AddNewContacts',
//   payload: value,
// });

// export const deleteContact = contactId => ({
//   type: 'DeleteContact',
//   payload: contactId,
// });

// export const handleOnChangefilter = value => ({
//   type: 'Changefilter',
//   payload: value,
// });
