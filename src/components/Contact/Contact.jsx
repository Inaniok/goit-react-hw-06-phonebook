import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/phoneBookSlice';
import {
  ContactCount,
  ContactName,
  ContactNumber,
  ContactButton,
} from './Contact.styled';

export const Contact = ({ name, number, id, index }) => {
  const dispatch = useDispatch();

  const handleRemoveContact = contactId => {
    dispatch(removeContact(contactId));
  };
  
  return (
    <>
      <ContactCount>{index + 1}.</ContactCount>
      <ContactName>{name}:</ContactName>
      <ContactNumber href={`tel: ${number}`}>{number}</ContactNumber>
      <ContactButton type="button" onClick={() => handleRemoveContact(id)}>
        Delete
      </ContactButton>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleRemoveContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
