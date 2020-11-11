import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Route from '../config/Route';

import DashboardScreen from '../screens/dashboard/Dashboard';
import RestaurantDetails from '../screens/dashboard/RestaurantDetails';
import Chat from '../screens/dashboard/Chat';
import Map from '../screens/dashboard/Map';

const MainStackNavigator = createStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator>
      <MainStackNavigator.Screen
        name={Route.Dashboard}
        component={DashboardScreen}
        options={(props) => {
          return {headerShown: false};
        }}
      />
      <MainStackNavigator.Screen
        name={Route.RestaurantDetails}
        component={RestaurantDetails}
        options={(props) => {
          return {headerShown: true};
        }}
      />
      <MainStackNavigator.Screen
        name={Route.Chat}
        component={Chat}
        options={(props) => {
          return {headerShown: true};
        }}
      />
      <MainStackNavigator.Screen
        name={Route.Map}
        component={Map}
        options={(props) => {
          return {headerShown: true};
        }}
      />
    </MainStackNavigator.Navigator>
  );
};
