import {Platform, StatusBar, PermissionsAndroid, Alert} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import {StackActions} from '@react-navigation/native';

import Config from '../config/index';
import Module from '../module/index';

const Storage = {
  setData: async (key, value) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },
  getData: async (key) => {
    const data = await AsyncStorage.getItem(key);
    try {
      return JSON.parse(data);
    } catch (error) {
      return data;
    }
  },
  removeData: async (key) => {
    await AsyncStorage.removeItem(key);
  },
};

const emailValidation = (email) => {
  var emailString = '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.+[A-Za-z]{2,64}';

  if (email == '') {
    Alert.alert(Config.String.APP_NAME, Config.String.ENTER_VALID_EMAIL, [
      {
        text: 'Ok',
      },
    ]);
  } else if (!email.match(emailString)) {
    Alert.alert(Config.String.APP_NAME, Config.String.ENTER_VALID_EMAIL, [
      {
        text: 'Ok',
      },
    ]);
  }

  return email.match(emailString);
};

const passwordValidation = (password) => {
  if (password == '') {
    Alert.alert(Config.String.APP_NAME, Config.String.ENTER_VALID_PASSWORD, [
      {
        text: 'Ok',
      },
    ]);
  } else if (password.length < 8) {
    Alert.alert(Config.String.APP_NAME, Config.String.ENTER_VALID_PASSWORD, [
      {
        text: 'Ok',
      },
    ]);
  }

  return password.length >= 8;
};

const storeUserData = () => {
  Storage.setData(Config.String.IS_LOGIN, true);
};

const storeUserRestaurantData = () => {
  Storage.setData(Config.String.RESTAURANT_DATA, true);
};

const logoutUser = () => {
  Storage.setData(Config.String.IS_LOGIN, false);
};

export default {
  Storage,
  emailValidation,
  passwordValidation,
  storeUserData,
  storeUserRestaurantData,
  logoutUser,
};
