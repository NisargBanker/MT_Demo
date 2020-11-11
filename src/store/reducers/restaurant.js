import {SET_USER_SESSON, SET_RESTAURANTS} from '../actions/auth';

const initialState = {
  restaurantList: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESTAURANT_LIST:
      return {...state, restaurantList: action.value};
    case SET_RESTAURANTS:
      return {...state, restaurantList: action.value};
    default:
      return state;
  }
};

export default authReducer;
