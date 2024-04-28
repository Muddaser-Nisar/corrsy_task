import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from 'utils/constants/colors';
const ScreenWrapper = ({children}) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaContainer}>{children}</SafeAreaView>
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.appBackground,
    paddingHorizontal: wp(5),
  },
  safeAreaContainer: {
    flex: 1,
  },
});
