import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Login from 'screens/authentication/Login';
import {NAVIGATION_SCREENS} from './ScreenNames';
const Stack = createNativeStackNavigator();
const AuthenticationStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={NAVIGATION_SCREENS.AuthenticationScreen.Login}
        component={Login}
      />
      {/* <Stack.Screen
        name={NAVIGATION_SCREENS.AuthenticationScreen.SignUp}
        component={SignUp}
      />
      <Stack.Screen
        name={NAVIGATION_SCREENS.AuthenticationScreen.ResetPassword}
        component={ResetPassword}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
