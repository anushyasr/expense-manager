import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AddExpense from './components/AddExpense';

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
      <Route path="/add-expense">
        <AddExpense />
      </Route>
    </Switch>
  </>
);

export default App;
