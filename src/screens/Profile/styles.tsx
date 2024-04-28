import {StyleSheet, ViewStyle} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface Styles {
  contentContainer?: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  contentContainer: {
    paddingVertical: hp(5),
    width: '88%',
    alignSelf: 'center',
  },
});

export default styles;
