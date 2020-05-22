import LocalStorageUtil from '../utils/LocalStorageUtil';

const initialState = {
  isUserLoggedIn: LocalStorageUtil.getUserLoggedIn(),
  users: LocalStorageUtil.getUsers(),
  currentUser: LocalStorageUtil.getCurrentUser(),
  accounts: LocalStorageUtil.getAccounts(),
  categories: LocalStorageUtil.getCategories(),
  expenses: LocalStorageUtil.getExpenses(),
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER': {
      const users = [...state.users];
      users.push(action.user);
      LocalStorageUtil.setUsers(users);
      return {
        ...state,
        users,
      };
    }
    case 'LOG_IN_USER':
      LocalStorageUtil.setCurrentUser(action.user);
      LocalStorageUtil.setUserLoggedIn(true);
      return {
        ...state,
        isUserLoggedIn: true,
        currentUser: action.user,
      };
    case 'LOGOUT_USER':
      LocalStorageUtil.setCurrentUser({});
      LocalStorageUtil.setUserLoggedIn(false);
      return {
        ...state,
        isUserLoggedIn: false,
        currentUser: {},
      };
    case 'ADD_ACCOUNT': {
      const accounts = [...state.accounts];
      accounts.push(action.account);
      LocalStorageUtil.setAccounts(accounts);
      return {
        ...state,
        accounts,
      };
    }
    case 'ADD_CATEGORY': {
      const categories = [...state.categories];
      categories.push(action.category);
      LocalStorageUtil.setCategories(categories);
      return {
        ...state,
        categories,
      };
    }
    case 'ADD_EXPENSES': {
      const expenses = [...state.expenses];
      expenses.push(action.expense);
      LocalStorageUtil.setExpenses(expenses);
      return {
        ...state,
        expenses,
      };
    }

    default:
      return state;
  }
}

export default reducer;
