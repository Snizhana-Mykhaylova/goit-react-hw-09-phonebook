import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/phonebook/phonebook-actions';
import * as selectors from '../../redux/phonebook/phonebook-selectors';
import TextField from '@material-ui/core/TextField';

const styles = {
  input: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
    width: 400,
  },
};

const Filter = () => {
  const value = useSelector(selectors.getFilter);
  const dispatch = useDispatch();
  const onChange = useCallback(
    event => dispatch(actions.filterChange(event.target.value)),
    [dispatch],
  );

  return (
    <TextField
      style={styles.input}
      label="Find contacts by name"
      variant="filled"
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

export default Filter;
