export const addNewCntacts = value => ({
  type: 'AddNewContacts',
  payload: value,
});

export const deleteContact = contactId => ({
  type: 'DeleteContact',
  payload: contactId,
});

export const handleOnChangefilter = value => ({
  type: 'Changefilter',
  payload: value,
});
