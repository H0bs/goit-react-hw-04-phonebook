import PropTypes from 'prop-types';
import { useState } from "react";
import { nanoid } from 'nanoid';
import { Form, FormLabel, FormInput, InputButton } from './ContactForm.styled';

function AddContactForm({onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
    }
    onSubmit(contact)
    resetForm();
  }

  const resetForm = () => {
    setName('');
    setNumber('');
  }
  return (
    <>
        <Form onSubmit={handleSubmit}>
          <FormLabel> Name
            <FormInput
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Oleksandr Veremchuk"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </FormLabel>
          <FormLabel>Phone number
            <FormInput
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              placeholder="555-55-55"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormLabel>
          <InputButton type="submit">Add contact</InputButton>
        </Form>
      </>
  )
}

AddContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default AddContactForm;