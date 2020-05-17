import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

const Category = ({ addCategory }) => {
  const [categoryName, setCategoryName] = useState('');
  const [error, setError] = useState({});

  const classes = useStyles({});

  const handleCategoryName = (event) => {
    const { value } = event.target;
    setCategoryName(value);
    setError({
      ...error,
      categoryName: value ? '' : 'Category Name should not be empty',
    });
  };

  const handleSubmit = () => {
    if (categoryName) {
      addCategory({
        categoryName,
      });
    } else {
      setError({
        ...error,
        categoryName: categoryName ? '' : 'Category Name should not be empty',
      });
    }
  };
  const handleReset = () => {
    setCategoryName('');
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
            label="Category Name"
            value={categoryName}
            onChange={handleCategoryName}
            variant="outlined"
          />
          <div className="error">{error.categoryName}</div>
        </FormControl>

        <FormControl className={classes.formControl}>
          <FormActions handleSave={handleSubmit} handleReset={handleReset} />
        </FormControl>
      </form>
    </div>
  );
};
Category.propTypes = {
  addCategory: PropTypes.func.isRequired,
};
const mapStateToDispatch = (dispatch) => ({
  addCategory: (category) => {
    dispatch({
      type: 'ADD_CATEGORY',
      category,
    });
  },
});

export default connect(null, mapStateToDispatch)(Category);
