import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {colors} from '../../utils/constants/colors';
import {fonts} from '../../utils/constants/fonts';

interface Styles {
  contentContainer?: ViewStyle;
  title?: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  title: {
    textAlign: 'center',
    paddingVertical: hp(3.5),
    fontFamily: fonts['Inter-Bold'],
    color: colors.lightBlack,
    letterSpacing: 0.7,
    fontSize: hp(2),
  },
  contentContainer: {
    paddingHorizontal: 5,
    paddingVertical: hp(1),
    paddingBottom: hp(30),
  },
});

export default styles;
