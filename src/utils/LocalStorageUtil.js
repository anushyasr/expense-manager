import LocalStorage from 'local-storage';

const LocalStorageUtil = {
  getUserLoggedIn() {
    return LocalStorage.get('isUserLoggedIn') || false;
  },

  setUserLoggedIn(isUserLoggedIn) {
    LocalStorage.set('isUserLoggedIn', isUserLoggedIn);
  },

  getCurrentUser() {
    return LocalStorage.get('currentUser') || {};
  },

  setCurrentUser(user) {
    LocalStorage.set('currentUser', user);
  },

  getUsers() {
    return LocalStorage.get('users') || [];
  },

  addUser(user) {
    let users = LocalStorage.get('users');
    if (!users) {
      users = [];
    }
    users.push(user);
    LocalStorage.set('users', users);
  },

  setUsers(users) {
    LocalStorage.set('users', users);
  },

  getAccounts() {
    return LocalStorage.get('accounts') || [];
  },

  setAccounts(accounts) {
    LocalStorage.set('accounts', accounts);
  },

  getCategories() {
    return LocalStorage.get('categories') || [];
  },

  setCategories(categories) {
    LocalStorage.set('categories', categories);
  },
  getExpenses() {
    return LocalStorage.get('expenses') || [];
  },
  setExpenses(expenses) {
    LocalStorage.set('expenses', expenses);
  },
};

export default LocalStorageUtil;
