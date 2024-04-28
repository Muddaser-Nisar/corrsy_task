import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from 'utils/constants/colors';
import {fonts} from 'utils/constants/fonts';
interface Styles {
  loginTopContainer?: ViewStyle;
  topImageLogin?: ImageStyle;
  loginSubContainer?: ViewStyle;
  loginText?: TextStyle;
  loginTextSubHeading?: TextStyle;
  forgetContainer?: ViewStyle;
  createAccount?: ViewStyle;
  bottomText?: TextStyle;
  space?: ViewStyle;
}

const Styles: Styles = StyleSheet.create<Styles>({
  loginTopContainer: {
    marginTop: hp(18),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp(22) / 2,
    alignSelf: 'center',
    height: hp(18),
    width: hp(18),
    borderColor: colors.activeColor,
    borderWidth: 0.5,
  },
  topImageLogin: {
    height: 100,
    width: 105,
  },
  loginSubContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: hp(4),
  },
  loginText: {
    color: colors.lightBlack,
    fontFamily: fonts['Quicksand-Bold'],
    fontSize: hp(2.4),
  },
  loginTextSubHeading: {
    color: colors.black,
    fontFamily: fonts['Quicksand-Medium'],
    fontSize: hp(1.8),
    paddingVertical: hp(1),
  },
  forgetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    paddingVertical: hp(2.2),
  },
  createAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(2),
    marginTop: hp(5),
  },
  bottomText: {
    color: colors.black,
    fontSize: hp(1.5),
    fontFamily: fonts['Quicksand-Medium'],
    marginTop: hp(4),
    paddingVertical: hp(1.3),
    textAlign: 'center',
  },
  space: {
    height: hp(2),
  },
});

export default Styles;
