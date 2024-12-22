import './App.css';
import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import savedContacts from './contacts.json';

function App() {
  const [contacts, setContacts] = useState(() => {
    if (window.localStorage.getItem('contacts') !== null) {
      return JSON.parse(window.localStorage.getItem('contacts'));
    }

    return savedContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  function addNewContact(newContact) {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  }

  function deleteContact(contactId) {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  }

  const sortedContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <div className="container">
      <h1>Phone book</h1>
      <ContactForm onAdd={addNewContact} />
      <SearchBox onSearch={setFilter} />
      <ContactList contacts={sortedContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
