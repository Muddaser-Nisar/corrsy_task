import {NavigationContainer} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {setLoggedIn} from 'redux/Shared';
import {useAppDispatch} from 'redux/store';
import {getItem} from 'utils/helpers/async';
import DashBoardStack from './DashBoardStack';

// Render the appropriate navigator based on authentication state
const AppNavigation = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const isLoggedIn = await getItem('isLoggedIn');
    dispatch(setLoggedIn(Boolean(isLoggedIn)));
  };
  // const {isLoggedIn} = useSelector((state: any) => state?.Shared);

  return (
    <NavigationContainer>
      {/* {isLoggedIn ? <DashBoardStack /> : <AuthenticationStack />} */}
      <DashBoardStack />
    </NavigationContainer>
  );
};
export type StackProps = NativeStackScreenProps<{}>;

export default AppNavigation;
