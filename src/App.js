import React, { useEffect, Suspense, lazy } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Bar from './components/Bar';
import Container from './components/Container';
import { authOperations } from './redux/auth';
import { useDispatch } from 'react-redux';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar>
        <Bar />
      </AppBar>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>

          <PublicRoute path="/login" restricted redirectTo="/contacts">
            {' '}
            <LoginView />{' '}
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            {' '}
            <ContactsView />
          </PrivateRoute>

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;
