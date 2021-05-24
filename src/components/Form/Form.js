import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import ContactOperations from '../../redux/phonebook/phonebook-operations';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
    width: 400,
  },

  input: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
  },
};

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    () => dispatch(ContactOperations.addContact(name, number)),
    [dispatch, name, number],
  );

  const changeName = useCallback(e => {
    setName(e.target.value);
  }, []);

  const changeNumber = useCallback(e => {
    setNumber(e.target.value);
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit();
    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <TextField
        style={styles.input}
        label="Name"
        variant="filled"
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={changeName}
      />

      <TextField
        style={styles.input}
        label="Number"
        variant="filled"
        value={number}
        type="tel"
        name="number"
        pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
        title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
        required
        onChange={changeNumber}
      />

      <Button type="submit" variant="contained" color="primary">
        Add contact
      </Button>
    </form>
  );
};

export default Form;
