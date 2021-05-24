import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from '../redux/phonebook/phonebook-operations';
import Form from '../components/Form';
import Contacts from '../components/Contacts';
import Filter from '../components/Filter';
import * as selectors from '../redux/phonebook/phonebook-selectors';

const ContactsView = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.getLoading);
  const isError = useSelector(selectors.getError);

  useEffect(() => {
    dispatch(operations.fetchContact());
  }, [dispatch]);

  return (
    <div className="containerApp">
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
      {isLoading && <h2>Loading ... </h2>}
      {isError && <h2>Something goes wrong :( </h2>}
    </div>
  );
};

export default ContactsView;
