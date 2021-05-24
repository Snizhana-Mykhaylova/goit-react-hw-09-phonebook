import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: 'white',
  },
}));

const Navigation = () => {
  const classes = useStyles();
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={classes.link}
        activeStyle={{
          backgroundColor: 'white',
          color: '#3f51b5',
        }}
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={classes.link}
          activeStyle={{
            backgroundColor: 'white',
            color: '#3f51b5',
          }}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
