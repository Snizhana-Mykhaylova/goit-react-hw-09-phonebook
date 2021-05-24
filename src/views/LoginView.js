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

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`Тип поля name - ${name} не обрабатывается`);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Please, log in if you already have an account!</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
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
          label="Password"
          variant="filled"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <Button type="submit" variant="contained" color="primary">
          {' '}
          Login
        </Button>
      </form>
    </div>
  );
};

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

export default LoginView;
