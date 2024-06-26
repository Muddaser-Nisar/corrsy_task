import React from 'react';
import {AppRegistry, LogBox, Text, TextInput} from 'react-native';
import FlashMessage from 'react-native-flash-message';
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
      <FlashMessage position={'top'} />
    </PersistGate>
  </Provider>
);

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => AppRedux);
