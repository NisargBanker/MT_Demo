import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Route from '../config/Route';

import LoginScreen from '../screens/user/Login';
import DashboardScreen from '../screens/dashboard/Dashboard';

const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator>
      <AuthStackNavigator.Screen
        name={Route.Login}
        component={LoginScreen}
        options={(props) => {
          return {headerShown: false};
        }}
      />
    </AuthStackNavigator.Navigator>
  );
};
