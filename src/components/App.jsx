import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { NoContacts } from './NoContacts/NoContacts';
import { useLocalStorage  } from '../hooks/useLocalStorage';
import { Wrapper, Title, ContactsTitle } from './App.styled';

const LOC_STORAGE_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage(LOC_STORAGE_KEY, []);
  const [filter, setFilter] = useState('');

  const handleFormSubmit = (values, { resetForm }) => {

  const contact = { id: nanoid(), ...values };
  
  const isAdded = checkContactIsAdded(contact);
    if (isAdded) {
      return alert(`${contact.name} is already in contacts`);
    }

    setContacts(state => [contact, ...state]);
    resetForm;

    const handleFilterValue = ({ target }) => setFilter(target.value);
  
  const handleRemoveContact = ContactId => {
    setContacts(state => state.filter(({ id }) => id !== contactId));
  };



  const checkContactIsAdded = ({ name }) => {
    const normalizedContactName = name.toLowerCase().trim();

    return contacts.find(
      ({ name }) => name.toLowerCase().trim() === normalizedContactName
    );
  };

  const normalizedSearchingName = filter.toLocaleLowerCase().trim();

  let displayedContacts = contacts.filter(({ name }) =>
    name.toLocaleLowerCase().trim().includes(normalizedSearchingName)
  );

    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm handleFormSubmit={this.handleFormSubmit} />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter handleFilterValue={this.handleFilterValue} value={filter} />
        {displayedContacts.length !== 0 ? (
          <ContactList
            contacts={displayedContacts}
            handleRemoveContact={handleRemoveContact}
          />
        ) : (
          <NoContacts />
        )}
      </Wrapper>
    );
  }
}