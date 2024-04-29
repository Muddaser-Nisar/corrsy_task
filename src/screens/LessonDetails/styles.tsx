import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from 'utils/constants/colors';
import {fonts} from 'utils/constants/fonts';
interface Styles {
  card?: ViewStyle;
  title?: TextStyle;
  subIcon?: ImageStyle;
  subTitle?: TextStyle;
  lessonTitle?: TextStyle;
  courseContainer?: ViewStyle;
  bottomButton?: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  card: {
    width: hp(25),
    backgroundColor: 'white',
    borderRadius: hp(25) / 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // for Android
    marginBottom: hp(1.5),
    minHeight: hp(25),
    borderColor: colors.inActiveColor,
    marginTop: hp(3),
    alignSelf: 'center',
    paddingHorizontal: wp(3),
    marginHorizontal: wp(2),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(2),
  },
  subIcon: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  subTitle: {
    color: colors.black,
    fontFamily: fonts['Quicksand-Medium'],
    fontSize: hp(2),
    textAlign: 'center',
  },
  lessonTitle: {
    fontFamily: fonts['Quicksand-Medium'],
    color: colors.black,
    marginTop: hp(2),
    letterSpacing: 1,
  },
  courseContainer: {
    paddingVertical: hp(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButton: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingVertical: hp(10),
    paddingHorizontal: wp(5.5),
  },
});

export default styles;
