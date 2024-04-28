import MainHeader from 'components/MainHeader';
import PrimaryButton from 'components/PrimaryButton';
import ProfileContainer from 'components/ProfileContainer';
import ScreenWrapper from 'layout/ScreenWrapper';
import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
const Index = () => {
  return (
    <ScreenWrapper>
      <MainHeader title="Profile" />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <ProfileContainer
          name="Muddaser Abbasi"
          email="muddasernisar786@gmail.com"
          phoneNumber="03001234567"
        />
        <View style={styles.contentContainer}>
          <PrimaryButton title="Logout" />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Index;
