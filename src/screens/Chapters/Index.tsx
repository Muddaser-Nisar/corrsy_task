import Loader from 'components/Loader';
import MainHeader from 'components/MainHeader';
import ScreenWrapper from 'layout/ScreenWrapper';
import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import {useAppDispatch} from 'redux/store';
import {colors} from 'utils/constants/colors';
import icons from 'utils/constants/icons';
import {fetchChapters} from './slice/chaptersAction';
import styles from './styles';
const Index = ({navigation, route}) => {
  const {courseId, courseName} = route.params;

  const dispatch = useAppDispatch();
  const {chapters, lessons, loading, error} = useSelector(
    (state: any) => state?.chaptersReducer,
  );
  useEffect(() => {
    dispatch(fetchChapters(courseId));
  }, [dispatch]);
  console.log('chapter reducerss', JSON.stringify(chapters));

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.card}>
        <Text style={styles.subTitle}>Lesson No.{item?.lessonNumber}</Text>
        <Text style={styles.lessonTitle}>{item?.title}</Text>
      </View>
    );
  };

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
        <MainHeader title={`${courseName}'s Chapter`} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={styles.courseContainer}>
          <Image
            source={{uri: chapters[0]?.chapter_icon}}
            style={[styles.subIcon]}
          />
          <Text
            style={[
              styles.subTitle,
              {color: colors.activeColor, marginTop: heightPercentageToDP(2)},
            ]}>
            {chapters[0]?.chapter_name}
          </Text>
        </View>
        <FlatList
          data={lessons}
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
