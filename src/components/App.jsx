import { useState, useEffect } from "react";
import AddContactForm from "./ContactForm/ContactForm"
import { ContactList } from "./ContactList/ContactList"
import { Filter } from "./Filter/Filter"
import {Container, Title, ContactsTitle} from './App.styled'

function App() {
  const [contacts, setContacts] = useState(() => (JSON.parse(localStorage.getItem('Contacts')) || []));
  const [filter, setFilter] = useState('');

  const addContact = (newContact) => {
    if (contacts.some(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts`)
    } else {
      setContacts(state => [newContact, ...state])
    }
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  const filterContactChange = e => {
    setFilter(e.target.value);
  }

  const filterContact = () => {
    return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()))
  }

  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(contacts))
  }, [contacts]);

  return (
    <Container>
        <Title>Phone book</Title>
        <AddContactForm onSubmit={addContact}/>
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter
          filter={filter}
          onChangeFilter={filterContactChange}
        />
        <ContactList
          contacts={filterContact()}
          deleteContact = {deleteContact}
        />
      </Container>
  )
}

export default App;