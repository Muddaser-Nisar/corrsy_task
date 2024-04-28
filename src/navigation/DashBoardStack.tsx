import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Chapters from 'screens/Chapters/Index';
import TabNavigator from './BottomTabBar';
import {NAVIGATION_SCREENS} from './ScreenNames';
const Stack = createNativeStackNavigator();
const DashBoardStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={NAVIGATION_SCREENS.DashBoard.Tabs}
        component={TabNavigator}
      />
      <Stack.Screen
        name={NAVIGATION_SCREENS.DashBoard.Chapters}
        component={Chapters}
      />
    </Stack.Navigator>
  );
};

export default DashBoardStack;
