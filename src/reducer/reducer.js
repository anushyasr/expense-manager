import LocalStorageUtil from '../utils/LocalStorageUtil';

const initialState = {
  isUserLoggedIn: LocalStorageUtil.getUserLoggedIn(),
  users: LocalStorageUtil.getUsers(),
  currentUser: LocalStorageUtil.getCurrentUser(),
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
    default:
      return state;
  }
}

export default reducer;
