import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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
  btn: {
    textAlign: 'center',
    width: 100,
  },
  btnSave: {
    marginRight: 10,
  },
  btnReset: {
    marginLeft: 10,
  },
}));

const Category = () => {
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
            label="Category Name"
            variant="outlined"
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <Button
            className={`${classes.btn} ${classes.btnSave}`}
            variant="contained"
            color="primary"
          >
            Save
          </Button>
          <Button
            className={`${classes.btn} ${classes.btnReset}`}
            variant="contained"
            color="primary"
          >
            Reset
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

export default Category;
