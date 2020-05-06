import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Expense from './components/Expense';
import Account from './components/Account';
import Category from './components/Category';

const App = () => (
  <>
    <Header />

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/manage-expense">
        <Expense />
      </Route>
      <Route path="/manage-account">
        <Account />
      </Route>
      <Route path="/manage-category">
        <Category />
      </Route>
    </Switch>
  </>
);

export default App;
