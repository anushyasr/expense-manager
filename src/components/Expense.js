import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import FormActions from './common/FormActions';

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

const AddExpense = () => {
  const classes = useStyles();
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
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <TextField label="Account" className="field" variant="outlined" />
          </FormControl>

          <FormControl className={classes.formControl}>
            <TextField label="Category" className="field" variant="outlined" />
          </FormControl>

          <FormControl className={classes.formControl}>
            <TextField label="Amount" className="field" variant="outlined" />
          </FormControl>

          <FormControl className={classes.formControl}>
            <FormActions />
          </FormControl>
        </form>
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default AddExpense;
