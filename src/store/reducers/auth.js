import {SET_USER_SESSON} from '../actions/auth';

const initialState = {
  isUserLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_SESSON:
      return {isUserLoggedIn: action.value};
    default:
      return state;
  }
};

export default authReducer;
