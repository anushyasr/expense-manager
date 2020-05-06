import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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

const Login = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <form className={classes.form}>
        <FormControl className={classes.formControl}>
          <TextField className="field" label="Username" variant="outlined" />
        </FormControl>

        <FormControl className={classes.formControl}>
          <TextField className="field" label="Password" variant="outlined" />
        </FormControl>

        <FormControl className={classes.formControl}>
          <Button variant="contained" color="primary">
            Login
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

export default Login;
