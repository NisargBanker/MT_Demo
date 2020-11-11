import Config from '../../config/index';
import Utils from '../../utils/index';
import * as Helper from '../../utils/Helper';

export const SET_USER_SESSON = 'SET_USER_SESSON';

export const setUserSesson = (isUserLoggedIn) => {
  return async (dispatch) => {
    dispatch({type: SET_USER_SESSON, value: isUserLoggedIn});
  };
};

export const login = (email, password) => {
  if (email !== Config.String.EMAIL_ID) {
    Helper.showAlert(Config.String.TRY_AGAIN, Config.String.ENTER_VALID_EMAIL);
    return;
  }

  if (password !== Config.String.PASSWORD) {
    Helper.showAlert(
      Config.String.TRY_AGAIN,
      Config.String.ENTER_VALID_PASSWORD,
    );
    return;
  }
  return async (dispatch) => {
    Utils.MethodUtils.storeUserData();
    dispatch({type: SET_USER_SESSON, value: true});
    return true;
  };
};
