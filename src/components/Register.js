import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { digestMessage } from '../utils/CommonUtil';
import LocalStorageUtil from '../utils/LocalStorageUtil';

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

const Register = ({ users, addUser }) => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({});

  const validatePassword = (value) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])/;
    let errorMessage = '';
    if (!value) {
      errorMessage = 'Password should not be empty';
    } else if (value.length < 8) {
      errorMessage = 'Password should have minimum of 8 characters';
    } else if (!regex.test(value)) {
      errorMessage = 'Password should have at least 1 upper case, number, symbol';
    }
    return errorMessage;
  };

  const handleUsernameChange = (event) => {
    const { value } = event.target;
    setUsername(value);
    const userAvailable = users.some((user) => user.username === value);
    setError({
      ...error,
      username: userAvailable ? 'Username already taken' : '',
    });
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    setError({
      ...error,
      password: validatePassword(value),
    });
  };

  const handleConfirmPasswordChange = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);
    if (password !== value) {
      setError({
        ...error,
        confirmPassword: 'Passwords are not matching!',
      });
    } else {
      setError({
        ...error,
        confirmPassword: '',
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (error.username || error.password || error.confirmPassword) {
      return;
    }
    const user = {
      name,
      username,
      password: await digestMessage(password),
    };

    addUser(user); // Redux
    LocalStorageUtil.addUser(user); // LocalStorage
  };

  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <form onSubmit={handleSubmit} className={classes.form}>
        <FormControl className={classes.formControl}>
          <TextField
            value={name}
            className="field"
            label="Name"
            variant="outlined"
            required
            onChange={(event) => setName(event.target.value)}
          />
          {!name && <div className="error">Name is required</div>}
        </FormControl>

        <FormControl className={classes.formControl}>
          <TextField
            value={username}
            className="field"
            label="Username"
            variant="outlined"
            required
            onChange={handleUsernameChange}
          />
          <div className="error">{error.username}</div>
        </FormControl>

        <FormControl className={classes.formControl}>
          <TextField
            type="password"
            value={password}
            className="field"
            label="Password"
            variant="outlined"
            required
            helperText={
              <div>
                <ul>
                  <li>Password is required</li>
                  <li>Password should be minimum of 8 characters</li>
                  <li>Password should have at least 1 upper case, symbol</li>
                </ul>
              </div>
            }
            onChange={handlePasswordChange}
          />
          <div className="error">{error.password}</div>
        </FormControl>

        <FormControl className={classes.formControl}>
          <TextField
            type="password"
            className="field"
            label="Confirm Password"
            variant="outlined"
            value={confirmPassword}
            required
            onChange={handleConfirmPasswordChange}
          />
          <div className="error">{error.confirmPassword}</div>
        </FormControl>

        <FormControl className={classes.formControl}>
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

Register.propTypes = {
  users: PropTypes.array.isRequired,
  addUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => {
    dispatch({
      type: 'ADD_USER',
      user,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
