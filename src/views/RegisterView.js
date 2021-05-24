import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegisterView = () => {
  const [state, setState] = useState(initialState);
  const { name, email, password } = state;
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register(state));
    setState(initialState);
  };

  return (
    <div>
      <h1>Please, register to create a new account!</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <TextField
          style={styles.label}
          label="Name"
          variant="filled"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <TextField
          style={styles.label}
          label="Email"
          variant="filled"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <TextField
          style={styles.label}
          id="filled-basic"
          label="Password"
          variant="filled"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterView;
