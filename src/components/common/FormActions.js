import React from 'react';
import PropTypes from 'prop-types';
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

const FormActions = ({ handleSave, handleReset }) => {
  const classes = useStyles();
  return (
    <>
      <Button
        className={`${classes.btn} ${classes.btnSave}`}
        variant="contained"
        color="primary"
        onClick={handleSave}
      >
        Save
      </Button>
      <Button
        onClick={handleReset}
        className={`${classes.btn} ${classes.btnReset}`}
        variant="contained"
        color="primary"
      >
        Reset
      </Button>
    </>
  );
};

FormActions.propTypes = {
  handleSave: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default FormActions;
