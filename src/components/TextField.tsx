import React from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../utils/constants/colors';
import {fonts} from '../utils/constants/fonts';
import icons from '../utils/constants/icons';
interface Props {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  icon?: React.ReactNode;
  value?: string;
  isPassword?: boolean;
  keyboardType?: KeyboardTypeOptions;
  toggleOpenClose?: () => void;
  toggleStatus?: boolean;
}

const TextField: React.FC<Props> = ({
  placeholder,
  icon,
  onChangeText,
  value,
  isPassword,
  keyboardType,
  toggleOpenClose,
  toggleStatus,
}) => {
  return (
    <View
      style={[
        styles.container,
        {borderColor: value ? colors.orange : colors.borderColor},
      ]}>
      {icon}
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={colors.borderColor}
        defaultValue={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        maxLength={10}
        secureTextEntry={isPassword ? !toggleStatus : false}
        // autoFocus
      />
      {isPassword ? (
        <TouchableOpacity onPress={toggleOpenClose}>
          {toggleStatus ? <icons.openEye /> : <icons.closeEye />}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(0.2),
    minHeight: hp(0.5),
    alignSelf: 'stretch',
    borderColor: colors.borderColor,
    borderWidth: 1,
    paddingHorizontal: wp(6),
  },
  textInput: {
    flex: 1,
    color: colors.black,
    fontSize: wp(3.3),
    paddingHorizontal: wp(3),
    fontFamily: fonts['Inter-Regular'],
  },
});

export default TextField;
