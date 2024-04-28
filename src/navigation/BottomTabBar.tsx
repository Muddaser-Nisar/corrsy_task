import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Platform, StyleSheet, Text} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CoursesProgress from 'screens/CoursesProgress/Index';
import Home from 'screens/Home/Index';
import Profile from 'screens/Profile/Index';

import icons from 'utils/constants/icons';

import {colors} from 'utils/constants/colors';
import {fonts} from 'utils/constants/fonts';
import {NAVIGATION_SCREENS} from './ScreenNames';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      // tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: ({color, size, focused}) => (
            <Text
              style={[
                styles.labelStyle,
                {color: focused ? colors.activeColor : colors.inActiveColor},
              ]}>
              Home
            </Text>
          ),
          tabBarIcon: ({color, size, focused}) => (
            <icons.homeTab
              fill={focused ? colors.activeColor : colors.inActiveColor}
            />
          ),
        }}
        name={NAVIGATION_SCREENS.DashBoard.Home}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({color, size, focused}) => (
            <Text
              style={[
                styles.labelStyle,
                {color: focused ? colors.activeColor : colors.inActiveColor},
              ]}>
              Progress
            </Text>
          ),
          tabBarIcon: ({color, size, focused}) => (
            <icons.progressTab
              fill={focused ? colors.activeColor : colors.inActiveColor}
            />
          ),
        }}
        name={NAVIGATION_SCREENS.DashBoard.CoursesProgress}
        component={CoursesProgress}
      />

      <Tab.Screen
        options={{
          tabBarLabel: ({color, size, focused}) => (
            <Text
              style={[
                styles.labelStyle,
                {color: focused ? colors.activeColor : colors.inActiveColor},
              ]}>
              Profile
            </Text>
          ),
          tabBarIcon: ({color, size, focused}) => (
            <icons.profileTab
              fill={focused ? colors.activeColor : colors.inActiveColor}
            />
          ),
        }}
        name={NAVIGATION_SCREENS.DashBoard.Profile}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    flexDirection: 'row',
    height: hp('12%'),
    paddingTop: Platform.OS == 'android' ? hp(0.8) : hp(3),
    paddingHorizontal: hp(2),
    backgroundColor: colors.white,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },

  labelStyle: {
    marginTop: hp(2.5),
    textAlign: 'center',
    fontSize: hp(1.8),
    fontFamily: fonts['Quicksand-Bold'],
    letterSpacing: 1,
  },
});
