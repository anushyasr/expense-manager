const initialState = {
  isUserLoggedIn: false,
  users: [],
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
    default:
      return state;
  }
}

export default reducer;
