import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import images from 'utils/constants/images';
import {colors} from '../utils/constants/colors';
import {fonts} from '../utils/constants/fonts';
interface Props {
  name?: string;
  phoneNumber?: string;
  email?: string;
}

const ProfileContainer: React.FC<Props> = ({name, phoneNumber, email}) => {
  return (
    <View style={styles.card}>
      <Image source={images.profile} style={{width: 90, height: 90}} />
      <Text style={styles.textBold}>{name}</Text>
      <Text style={styles.textLight}>{phoneNumber}</Text>
      <Text style={styles.textLight}>{email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    justifyContent: 'center',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // for Android
    marginBottom: heightPercentageToDP(2),
    alignItems: 'center',
    paddingVertical: heightPercentageToDP(4),
    borderColor: colors.borderColor,
    marginTop: heightPercentageToDP(2),
    alignSelf: 'center',
  },
  textLight: {
    color: colors.lightBlack,
    fontFamily: fonts['Quicksand-Medium'],
    fontSize: heightPercentageToDP(1.7),
    paddingVertical: heightPercentageToDP(0.2),
  },
  textBold: {
    fontFamily: fonts['Quicksand-Bold'],
    color: colors.black,
    fontSize: heightPercentageToDP(2.3),
    paddingVertical: heightPercentageToDP(1),
  },
});

export default ProfileContainer;
