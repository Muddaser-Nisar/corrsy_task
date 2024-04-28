import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../../utils/constants/colors';
import {fonts} from '../../utils/constants/fonts';

interface Styles {
  contentContainer?: ViewStyle;
  title?: TextStyle;
  nameText?: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  title: {
    paddingVertical: hp(3.5),
    fontFamily: fonts['Inter-Bold'],
    color: colors.lightBlack,
    letterSpacing: 0.7,
    fontSize: hp(2),
  },
  contentContainer: {
    paddingHorizontal: 5,
    paddingVertical: hp(1),
  },
  nameText: {
    fontFamily: fonts['Inter-SemiBold'],
    color: colors.black,
    fontSize: hp(1.6),
    textAlign: 'center',
    marginTop: wp(2),
  },
});

export default styles;
