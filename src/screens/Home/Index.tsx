import Loader from 'components/Loader';
import MainHeader from 'components/MainHeader';
import ScreenWrapper from 'layout/ScreenWrapper';
import React, {useEffect} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import {useAppDispatch} from 'redux/store';
import {fonts} from 'utils/constants/fonts';
import {fetchSubjects} from './slice/homeAction';
import styles from './styles';
const Index = ({navigation}) => {
  const dispatch = useAppDispatch();
  const {subjects, loading, error} = useSelector(
    (state: any) => state?.homeReducer,
  );
  useEffect(() => {
    dispatch(fetchSubjects());
  }, [dispatch]);
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.card}>
        <View style={styles.rowContainer1}>
          <View style={{flex: 1}}>
            <Image
              source={{uri: item?.subject?.subject_icon}}
              style={styles.subIcon}
            />
          </View>
          <View style={styles.rowContainer2}>
            <View style={styles.dottedLine} />
            <View>
              <Text style={styles.subTitle}>{item?.subject?.Subject_name}</Text>
              <Text style={{fontFamily: fonts['Quicksand-Medium']}}>
                Subject Code : {item?.subject?.uniCode}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.detailButton}
          onPress={() => {
            navigation.navigate('Chapters', {
              courseId: item?._id,
              courseName: item?.subject?.Subject_name,
            });
          }}>
          <Text style={styles.btnText}>View Chapters</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScreenWrapper>
      <MainHeader title="Enrolled Courses List" />
      <View>
        <FlatList
          data={subjects}
          renderItem={renderItem}
          style={{
            marginTop: heightPercentageToDP(2),
          }}
          keyExtractor={(item, index) => index.toString()}
        />
        {loading && <Loader />}
        {error && <Text>Error: {error}</Text>}
        {/* due to shortage of time, showing here message for error */}
      </View>
    </ScreenWrapper>
  );
};

export default Index;
