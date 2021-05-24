import { useDispatch, useSelector } from 'react-redux';
import styles from './contacts.module.css';
import operations from '../../redux/phonebook/phonebook-operations';
import * as selectors from '../../redux/phonebook/phonebook-selectors';
import { Button } from '@material-ui/core';

const phoneFormatter = require('phone-formatter');

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.getFilteredContacts);

  return (
    <ul>
      {contacts.map(contact => (
        <li className={styles.contactItem} key={contact.id}>
          <span>{contact.name}:</span>
          <span className={styles.number}>
            {phoneFormatter.format(contact.number, 'NNN-NN-NN')}
          </span>
          <Button
            color="primary"
            onClick={() => dispatch(operations.deleteContact(contact.id))}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
