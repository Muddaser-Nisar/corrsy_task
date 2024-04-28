import PrimaryButton from 'components/PrimaryButton';
import TextField from 'components/TextField';
import ScreenWrapper from 'layout/ScreenWrapper';
import React, {useCallback, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {setLoggedIn} from 'redux/Shared';
import {useAppDispatch} from 'redux/store';
import icons from 'utils/constants/icons';
import images from 'utils/constants/images';
import {setItem} from 'utils/helpers/async';
import {StackProps} from '../../navigation/AppNavigation';
import Styles from './Styles';
interface FieldValues {
  phoneNumber: string;
  password: string;
  [key: string]: string; // Index signature to allow for any string property
}
const Login: React.FC<StackProps> = ({navigation}) => {
  const dispatch = useAppDispatch();

  // Array to hold field values with types
  const [fieldValues, setFieldValues] = useState<FieldValues>({
    phoneNumber: '',
    password: '',
  });
  const fields = [
    {
      key: 'phoneNumber',
      placeholder: 'Enter Phone Number',
      icon: icons.phoneNumber,
      keyboardType: 'phone-pad',
    },

    {
      key: 'password',
      placeholder: 'Enter Password',
      icon: icons.lock,
      keyboardType: 'default',
    },
    // ...more fields
  ];
  // Function to update individual field values
  const handleChangeText = (field: string, text: string) => {
    setFieldValues(prevState => ({...prevState, [field]: text}));
  };

  const [toggleStatus, setToggleStatus] = useState<boolean>(false);
  const toggleOpenClose = () => {
    setToggleStatus(!toggleStatus);
  };

  // useCallback to memoize the onPress callback
  const handleLoginPress = useCallback(async () => {
    if (fieldValues.phoneNumber.length > 0 && fieldValues.password.length > 0) {
      await setItem('isLoggedIn', 'true');
      dispatch(setLoggedIn('true'));
      showMessage({
        message: 'Login Successfully',
        type: 'success',
      });
    } else {
      // At the moment we aren't doing session based auth so I've put the same code here
      // for smooth naviagtion to dashboard
      await setItem('isLoggedIn', 'true');
      dispatch(setLoggedIn('true'));
      showMessage({
        message: 'Login Failed',
        description: 'Please fill the input fields.',
        type: 'danger',
      });
    }
  }, [fieldValues]);
  return (
    <ScreenWrapper>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior="padding"
        keyboardVerticalOffset={64}>
        <ScrollView
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'handled'}>
          <View style={Styles.loginTopContainer}>
            <Image
              source={images.logoBg}
              style={Styles.topImageLogin}
              resizeMode="contain"
            />
          </View>
          <View style={Styles.loginSubContainer}>
            <Text style={Styles.loginText}>Log In</Text>
            <Text style={Styles.loginTextSubHeading}>Login Your Account</Text>
          </View>
          {fields.map((field, index) => (
            <React.Fragment key={index}>
              <TextField
                key={index}
                placeholder={field.placeholder}
                icon={field.icon && <field.icon />}
                value={fieldValues[field.key]}
                onChangeText={text => handleChangeText(field.key, text)}
                isPassword={field.key.includes('password') ? true : false}
                keyboardType={field.keyboardType}
                toggleStatus={
                  field.key.includes('password') ? toggleStatus : false
                }
                toggleOpenClose={
                  field.key.includes('password') ? toggleOpenClose : () => {}
                }
              />
              {index < fields.length - 1 && <View style={Styles.space} />}
            </React.Fragment>
          ))}

          <View style={{marginTop: heightPercentageToDP(5)}}>
            <PrimaryButton title="Log in" onPress={handleLoginPress} />
            <Text
              style={{
                ...Styles.bottomText,
              }}>
              Terms and Conditions | Privacy Policy
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

export default Login;
