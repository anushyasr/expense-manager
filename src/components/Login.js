import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { digestMessage, isObjectEmpty } from '../utils/CommonUtil';

const useStyles = makeStyles({
  form: {
    border: '1px solid #aaaaaa',
    width: 400,
    borderRadius: 5,
    display: 'inline-block',
  },
  formControl: {
    display: 'block',
    marginTop: 20,
    marginBottom: 20,
  },
});

const Login = ({ users, setCurrentUser }) => {
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    const digest = await digestMessage(password);
    const currentUser = users.find(
      (user) => user.username === username && user.password === digest
    );

    if (isObjectEmpty(currentUser)) {
      setMessage('Username or password is wrong');
    } else {
      setMessage('');
      setCurrentUser(currentUser);
      history.push('/home');
    }
  };

  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <form className={classes.form}>
        <FormControl className={classes.formControl}>
          <TextField
            className="field"
            label="Username"
            variant="outlined"
            onChange={(event) => setUsername(event.target.value)}
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <TextField
            type="password"
            className="field"
            label="Password"
            variant="outlined"
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
          {message}
        </FormControl>
      </form>
    </div>
  );
};

Login.propTypes = {
  users: PropTypes.array.isRequired,
  setCurrentUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => {
    dispatch({
      type: 'SET_CURRENT_USER',
      user,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
