import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Config from '../config/index';

import {AuthNavigator} from './AuthNavigator';
import {MainNavigator} from './MainNavigator';

const AppNavigator = (props) => {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);

  return (
    <NavigationContainer>
      {isUserLoggedIn ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
