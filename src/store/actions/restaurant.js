import * as Helper from '../../utils/Helper';
import Config from '../../config/index';
import Module from '../../module/index';
import Utils from '../../utils/index';
import {insertPlace, fetchPlaces} from '../../helper/db';

export const RESTAURANT_LIST = 'RESTAURANT_LIST';
export const SET_RESTAURANTS = 'SET_RESTAURANTS';

export const getRestaurantList = () => {
  Module.CustomActivityIndicator.showLoader(true);
  return async (dispatch) => {
    const response = await fetch(Config.ApiEndPoints.API_RESTAURANTS_LIST, {
      method: 'GET',
    });
    Module.CustomActivityIndicator.showLoader(false);
    if (!response.ok) {
      Helper.showAlert(Config.String.SOMETHING_WRONG, resData.message);
      throw new Error(Config.String.SOMETHING_WRONG);
    }

    const resData = await response.json();
    if (resData.status === 200) {
      const dbResult = await insertPlace(JSON.stringify(resData.data));
      dispatch({type: RESTAURANT_LIST, value: resData.data});
      Utils.MethodUtils.storeUserRestaurantData();
    }

    return resData.data;
  };
};

export const loadRestaurant = () => {
  Module.CustomActivityIndicator.showLoader(true);
  return async (dispatch) => {
    try {
      const dbResult = await fetchPlaces();
      Module.CustomActivityIndicator.showLoader(false);
      dispatch({
        type: SET_RESTAURANTS,
        value: JSON.parse(dbResult.rows.item(0).data),
      });
      return JSON.parse(dbResult.rows.item(0).data);
    } catch (err) {
      throw err;
    }
  };
};
