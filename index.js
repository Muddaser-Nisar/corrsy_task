// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// /**
//  * @format
//  */

// AppRegistry.registerComponent(appName, () => App);

import React from 'react';
import {AppRegistry, LogBox, Text, TextInput} from 'react-native';
import {Provider} from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import {PersistGate} from 'redux-persist/integration/react';
import App from './App';
import {name as appName} from './app.json';
import store from './src/redux/store/index';
LogBox.ignoreAllLogs();

let persistor = persistStore(store);

const AppRedux = () => (
  <Provider {...{store}}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => AppRedux);
