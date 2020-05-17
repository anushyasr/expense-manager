import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import SelectWithLabel from './common/SelectWithLabel';
import FormActions from './common/FormActions';
const useStyles = makeStyles((theme) => ({
  form: {
    border: '1px solid #aaaaaa',
    width: 400,
    borderRadius: 5,
    display: 'inline-block',
    textAlign: 'center',
  },
  formControl: {
    display: 'block',
    margin: theme.spacing(1),
  },
}));

const Account = ({ addAccount }) => {
  const classes = useStyles();
  const [accountName, setAccountName] = useState('');
  const [accountType, setAccountType] = useState('');
  const [error, setError] = useState({});

  const handleAccountNameChange = (event) => {
    const { value } = event.target;
    setAccountName(value);
    setError({
      ...error,
      accountName: value ? '' : 'Account Name should not be empty',
    });
  };

  const handleAccountTypeChange = (value) => {
    setAccountType(value);
    setError({
      ...error,
      accountType: value ? '' : 'Select any one of the account type from the dropdown',
    });
  };

  const handleSubmit = () => {
    if (accountName && accountType) {
      addAccount({
        accountName,
        accountType,
      });
    } else {
      setError({
        ...error,
        accountName: accountName ? '' : 'Account Name should not be empty',
        accountType: accountType ? '' : 'Select any one of the account type from the dropdown',
      });
    }
  };

  const handleReset = () => {
    setAccountType('');
    setAccountName('');
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
            value={accountName}
            onChange={handleAccountNameChange}
            className="field"
            label="Account Name"
            variant="outlined"
          />
          <div className="error">{error.accountName}</div>
        </FormControl>

        <FormControl variant="outlined">
          <SelectWithLabel
            className="field"
            label="Account Type"
            options={{
              bank: 'Bank Account',
              credit: 'Credit Card',
              debit: 'Debit Card',
              cash: 'Cash',
            }}
            selectedValue={accountType}
            changeHandler={handleAccountTypeChange}
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <FormActions handleSave={handleSubmit} handleReset={handleReset} />
        </FormControl>
      </form>
    </div>
  );
};

Account.propTypes = {
  addAccount: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addAccount: (account) => {
    dispatch({
      type: 'ADD_ACCOUNT',
      account,
    });
  },
});

export default connect(null, mapDispatchToProps)(Account);
