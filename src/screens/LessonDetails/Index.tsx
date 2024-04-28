import Loader from 'components/Loader';
import MainHeader from 'components/MainHeader';
import ScreenWrapper from 'layout/ScreenWrapper';
import React, {useEffect} from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import {useAppDispatch} from 'redux/store';
import {colors} from 'utils/constants/colors';
import icons from 'utils/constants/icons';
import {fetchLessonDetails} from './slice/lessonDetailsAction';
import styles from './styles';
const Index = ({navigation, route}) => {
  const {lessonId, lessonTitle} = route.params;

  const dispatch = useAppDispatch();
  const {lessonDetails, loading, error} = useSelector(
    (state: any) => state?.lessonDetailsReducer,
  );

  useEffect(() => {
    dispatch(fetchLessonDetails(lessonId));
  }, [dispatch]);

  const renderItem = ({item, index}) => {
    return (
      <View>
        <Text style={[styles.lessonTitle, {textAlign: 'center'}]}>
          {item?.content?.contentTitle}
        </Text>

        <View style={[styles.card]}>
          <Text style={styles.subTitle}>
            {item?.content?.description ? item?.content?.description : 's'}
          </Text>
        </View>
      </View>
    );
  };
  console.log(
    ':::lessonDetailslessonDetails:: :::::::',
    JSON.stringify(lessonDetails),
  );

  return (
    <ScreenWrapper>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={{marginTop: heightPercentageToDP(2)}}
          onPress={() => {
            navigation.goBack();
          }}>
          <icons.backButton />
        </TouchableOpacity>
        <MainHeader title={`${lessonTitle}`} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={styles.courseContainer}>
          <Text
            style={[
              styles.subTitle,
              {color: colors.activeColor, marginTop: heightPercentageToDP(2)},
            ]}>
            {/* {chapters[0]?.chapter_name} */}
          </Text>
        </View>

        <FlatList
          data={lessonDetails}
          renderItem={renderItem}
          style={{
            marginTop: heightPercentageToDP(2),
          }}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          keyExtractor={(item, index) => index.toString()}
        />
        {loading && <Loader />}
        {error && <Text>Error: {error}</Text>}
        {/* due to shortage of time, showing here message for error */}
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Index;
