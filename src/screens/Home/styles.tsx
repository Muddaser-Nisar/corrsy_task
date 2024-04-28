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
  rowContainer1?: ViewStyle;
  rowContainer2?: ViewStyle;
  subIcon?: ImageStyle;
  dottedLine?: ViewStyle;
  subTitle?: TextStyle;
  detailButton?: ViewStyle;
  btnText?: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  card: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // for Android
    marginBottom: hp(1.5),
    paddingVertical: hp(2),
    borderColor: colors.inActiveColor,
    marginTop: hp(1),
    alignSelf: 'center',
    paddingHorizontal: wp(2),
  },
  rowContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowContainer2: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  subIcon: {
    height: 80,
    width: 65,
  },
  dottedLine: {
    borderWidth: 1, // Adjust the thickness of the line as needed
    borderStyle: 'dashed',
    borderColor: colors.activeColor,
  },
  subTitle: {
    color: colors.black,
    fontFamily: fonts['Quicksand-Bold'],
    fontSize: hp(2),
  },
  detailButton: {
    alignSelf: 'flex-end',
    backgroundColor: colors.activeColor,
    justifyContent: 'center',
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
    borderRadius: 2,
  },
  btnText: {
    textAlign: 'center',
    color: colors.white,
    fontFamily: fonts['Quicksand-Bold'],
    fontSize: hp(1.8),
  },
});

export default styles;
