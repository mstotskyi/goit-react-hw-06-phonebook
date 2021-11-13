import './App.css';
import React from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

export default function App() {
  return (
    <div className="App">
      <div className="Phonebook">
        <h1>Phonebook</h1>
        <ContactForm />
        <div className="contacts-wrapper">
          <h2 className="contacts-title">Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </div>
    </div>
  );
}
