import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from 'components/Loader';
import MainHeader from 'components/MainHeader';
import PrimaryButton from 'components/PrimaryButton';
import ScreenWrapper from 'layout/ScreenWrapper';
import {NAVIGATION_SCREENS} from 'navigation/ScreenNames';
import React, {useEffect, useState} from 'react';
import {
  AppState,
  BackHandler,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import WebView from 'react-native-webview';
import {useSelector} from 'react-redux';
import {useAppDispatch} from 'redux/store';
import icons from 'utils/constants/icons';
import {fetchLessonDetails} from './slice/lessonDetailsAction';
import styles from './styles';
const Index = ({navigation, route}) => {
  const {lessonId, lessonTitle} = route.params;

  const dispatch = useAppDispatch();
  const {lessonDetails, loading, error} = useSelector(
    (state: any) => state?.lessonDetailsReducer,
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [quizEnable, setQuizEnable] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchLessonDetails(lessonId));
  }, [dispatch]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        // Handle back button press
        // This function will be called when the user presses the back button
        AsyncStorage.setItem('lessonIdIndex', `{${lessonId},${currentIndex}}`);
        //to save progress I am putting in async storage lesson Id and its index
        //which could be display while filtering data from redux
        return true;
      },
    );

    const appStateChange = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'background') {
        // App is going to the background (minimized or closed)
        AsyncStorage.setItem('lessonIdIndex', `{${lessonId},${currentIndex}}`);
        //to save progress I am putting in async storage lesson Id and its index
        //which could be display while filtering data from redux
      }
    });

    return () => {
      // Clean up event listeners when component unmounts
      backHandler.remove();
      appStateChange.remove();
    };
  }, []); // Run effect only once when component mounts

  const displayLessonCard = () => {
    return (
      //video
      <View>
        {lessonDetails[currentIndex]?.widgetType === 'textAndImages' ? (
          <>
            <Text
              style={[
                styles.lessonTitle,
                {textAlign: 'center', marginTop: heightPercentageToDP(2)},
              ]}>
              {lessonDetails[currentIndex]?.content?.contentTitle}
            </Text>

            <View style={[styles.card]}>
              <Text style={styles.subTitle}>
                {lessonDetails[currentIndex]?.content?.description
                  ? lessonDetails[currentIndex]?.content?.description
                  : 'Title is not given'}
              </Text>
            </View>
          </>
        ) : lessonDetails[currentIndex]?.widgetType === 'video' ? (
          <View>
            <Text style={styles.subTitle}>Vidoe Content</Text>
            <WebView
              style={{marginTop: Platform.OS == 'ios' ? 20 : 0}}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{
                uri: lessonDetails[currentIndex]?.videoWidgetContent?.videoUrl,
              }}
            />
          </View>
        ) : null}
      </View>
    );
  };

  const onContinuePress = () => {
    try {
      if (currentIndex === lessonDetails.length - 1) {
        setQuizEnable(true);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    } catch (error) {}
  };
  const onQuizStart = () => {
    navigation.navigate(NAVIGATION_SCREENS.DashBoard.Quiz);
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
        <MainHeader title={`${lessonTitle}`} />
      </View>
      {displayLessonCard()}
      <View style={styles.bottomButton}>
        <PrimaryButton
          title={quizEnable ? 'Start Quiz' : 'Continue'}
          onPress={quizEnable ? onQuizStart : onContinuePress}
        />
      </View>
      {loading && <Loader />}
      {error && <Text>Error: {error}</Text>}
      {/* due to shortage of time, showing here message for error */}
    </ScreenWrapper>
  );
};

export default Index;
