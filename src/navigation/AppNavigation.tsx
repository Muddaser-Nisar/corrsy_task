import {NavigationContainer} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {setLoggedIn} from 'redux/Shared';
import {useAppDispatch} from 'redux/store';
import {colors} from 'utils/constants/colors';
import {getItem} from 'utils/helpers/async';
import AuthenticationStack from './AuthenticationStack';
import DashBoardStack from './DashBoardStack';

// Render the appropriate navigator based on authentication state
const AppNavigation = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const isLoggedIn = await getItem('isLoggedIn');
    dispatch(setLoggedIn(Boolean(isLoggedIn)));
    setIsLoading(false);
  };
  const {isLoggedIn} = useSelector((state: any) => state?.shared);

  return (
    <NavigationContainer>
      {isLoading ? (
        <ActivityIndicator
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          color={colors.activeColor}
          size={'large'}
        />
      ) : isLoggedIn ? (
        <DashBoardStack />
      ) : (
        <AuthenticationStack />
      )}
    </NavigationContainer>
  );
};
export type StackProps = NativeStackScreenProps<{}>;

export default AppNavigation;
