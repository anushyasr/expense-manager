import LocalStorageUtil from '../utils/LocalStorageUtil';

const initialState = {
  isUserLoggedIn: LocalStorageUtil.getUserLoggedIn(),
  users: LocalStorageUtil.getUsers(),
  currentUser: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER': {
      const users = [...state.users];
      users.push(action.user);
      return {
        ...state,
        users,
      };
    }
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.user,
      };
    default:
      return state;
  }
}

export default reducer;
