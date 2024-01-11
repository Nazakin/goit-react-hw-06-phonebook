import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContactAction, removeContactAction } from '../redux/contacts/actions';
import { filterContactsAction } from '../redux/filter/actions';

export const App = () => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const filters = useSelector((state) => state.filters)
  const contacts = useSelector((state) => state.contacts)
  const dispatch = useDispatch()

console.log(contacts)
  // useEffect(() => {
  //   const storedContacts = localStorage.getItem('contacts');
  //   if (storedContacts) {
  //       setContacts(JSON.parse(storedContacts));
  //     } 
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameExist = contacts.contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase());

    if (isNameExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContactAction(newContact));
    setName('');
    setNumber('');
  };

  const handleFilterChange = (e) => {
    const { value } = e.target;
    dispatch(filterContactsAction(value));;
  };

  const handleDeleteContact = (contactId) => {
    dispatch(removeContactAction(contactId))
  };

  const filteredContacts = contacts.contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm name={name} number={number} handleChange={handleChange} handleSubmit={handleSubmit} />
      <Filter filter={filters}  handleFilterChange={handleFilterChange}/>
      {filteredContacts.length > 0 ? (
        <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
      ) : (
        <p>No contacts found</p>
      )}
    </div>
  );
};
