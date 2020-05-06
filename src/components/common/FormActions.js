import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
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

const FormActions = () => {
  const classes = useStyles();
  return (
    <>
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
    </>
  );
};

export default FormActions;
