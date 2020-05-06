import React from 'react';
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

const Account = () => {
  const classes = useStyles();
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
            label="Account Name"
            variant="outlined"
          />
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
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <FormActions />
        </FormControl>
      </form>
    </div>
  );
};

export default Account;
