import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {colors} from 'utils/constants/colors';
import {fonts} from 'utils/constants/fonts';
interface MainHeaderProps {
  title?: string;
}
const MainHeader: React.FC<MainHeaderProps> = ({title}) => {
  return <Text style={styles.textStyle}>{title}</Text>;
};

export default MainHeader;

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: fonts['Quicksand-Bold'],
    color: colors.black,
    marginTop: heightPercentageToDP(2),
    paddingHorizontal: widthPercentageToDP(5.5),
    fontSize: heightPercentageToDP(2),
  },
});
