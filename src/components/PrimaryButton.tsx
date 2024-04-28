import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {colors} from 'utils/constants/colors';
import {fonts} from 'utils/constants/fonts';
interface ButtonProps {
  title?: string;
  onPress?: () => void;
  isLoading?: boolean;
}

const PrimaryButton: React.FC<ButtonProps> = ({title, onPress, isLoading}) => {
  return (
    <TouchableOpacity style={[styles.button]} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.activeColor,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: hp(1.7),
    minHeight: hp(2),
    alignSelf: 'stretch',
  },

  buttonText: {
    color: colors.white,
    fontFamily: fonts['Quicksand-Bold'],
    fontSize: hp(1.9),
    paddingHorizontal: 10,
  },
});

export default React.memo(PrimaryButton);
