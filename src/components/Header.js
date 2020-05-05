import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    backgroundColor: '#9494c5',
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },
  logo: {
    '& h3': {
      marginTop: 6,
    },
    fontSize: 20,
    height: 50,
  },
  menu: {
    '& ul': {
      marginTop: 13,
    },
    '& ul li': {
      marginLeft: 20,
      display: 'inline-block',
    },
  },
  btn: {
    marginLeft: 10,
    marginTop: 5,
  },
  active: {
    textDecoration: 'none',
    color: 'blue',
    fontSize: 20,
    marginTop: 9,
  },
});

const Header = () => {
  const history = useHistory();
  const classes = useStyles();

  const handleLogin = () => {
    history.push('/login');
  };

  const handleRegister = () => {
    history.push('/register');
  };

  return (
    <Grid className={classes.header} container spacing={1}>
      <Grid item xs={4} className={classes.logo}>
        <h3>Expense Manager</h3>
      </Grid>
      <Grid item xs={4} className={classes.menu}>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/add-expense" activeClassName={classes.active}>
              Add Expense
            </NavLink>
          </li>
        </ul>
      </Grid>
      <Grid
        style={{
          textAlign: 'right',
        }}
        item
        xs={4}
      >
        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          onClick={handleRegister}
        >
          Register
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
