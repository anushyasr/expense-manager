import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FormActions from './common/FormActions';
import SelectWithLabel from './common/SelectWithLabel';

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

const AddExpense = ({ accounts, categories, addExpense }) => {
  const classes = useStyles();
  const [account, setAccount] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState({});
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date());

  const handleDate = (value) => {
    setDate(value);
  };

  const handleAccountchange = (value) => {
    setAccount(value);
    setError({
      ...error,
      account: value ? '' : 'select any one of the Account from the dropdown ',
    });
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
    setError({
      ...error,
      category: value ? '' : 'select any one of the Category from the dropdown ',
    });
  };

  const handleAmountchange = (event) => {
    const { value } = event.target;
    setAmount(value);
    setError({
      ...error,
      amount: value ? '' : 'Amount Should not be empty',
    });
  };

  const handleSubmit = () => {
    if (date && account && category && amount) {
      addExpense({
        date,
        account,
        category,
        amount,
      });
    } else {
      setError({
        ...error,
        date: date ? '' : 'Date should not be empty ',
        account: account ? '' : 'select any one of the Account from the dropdown',
        category: category ? '' : 'select any one of the Account from the dropdown',
        amount: amount ? '' : 'Amount Should not be empty',
      });
    }
  };
  const handleReset = () => {
    setDate('');
    setAccount('');
    setCategory('');
    setAmount('');
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <form className={classes.form}>
          <FormControl className={classes.formControl}>
            <DateTimePicker
              inputVariant="outlined"
              margin="normal"
              label="Date"
              format="dd/MM/yyyy"
              showTodayButton
              className="field"
              value={date}
              onChange={handleDate}
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <SelectWithLabel
              className="field"
              options={accounts}
              label="account"
              changeHandler={handleAccountchange}
              selectedValue={account}
            />
            <div className="error">{error.account}</div>
          </FormControl>
          <FormControl className={classes.formControl}>
            <SelectWithLabel
              className="field"
              options={categories}
              label="category"
              changeHandler={handleCategoryChange}
              selectedValue={category}
            />
            <div className="error">{error.category}</div>
          </FormControl>

          <FormControl className={classes.formControl}>
            <TextField
              label="Amount"
              className="field"
              variant="outlined"
              onChange={handleAmountchange}
            />
            <div className="error">{error.amount}</div>
          </FormControl>

          <FormControl className={classes.formControl}>
            <FormActions handleSave={handleSubmit} handleReset={handleReset} />
          </FormControl>
        </form>
      </div>
    </MuiPickersUtilsProvider>
  );
};

AddExpense.propTypes = {
  accounts: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  addExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  accounts: state.accounts.map((item) => item.accountName),
  categories: state.categories.map((item) => item.categoryName),
});
const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => {
    dispatch({
      type: 'ADD_EXPENSES',
      expense,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
