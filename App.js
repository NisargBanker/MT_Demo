import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import RootComponent from './src/components/RootComponent';

import authReducer from './src/store/reducers/auth';
import {init} from './src/helper/db';

init()
  .then(() => {
    console.log('Initialized database');
  })
  .catch((err) => {
    console.log('Initializing db failed.');
    console.log(err);
  });

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <RootComponent>
        <AppNavigator />
      </RootComponent>
    </Provider>
  );
}
