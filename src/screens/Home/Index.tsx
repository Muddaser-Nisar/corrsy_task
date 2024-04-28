// import MainHeader from 'components/MainHeader';
// import ScreenWrapper from 'layout/ScreenWrapper';
// import React from 'react';
// import {StyleSheet} from 'react-native';

// const Index = () => {
//   return (
//     <ScreenWrapper>
//       <MainHeader title="Enrolled Courses List" />
//     </ScreenWrapper>
//   );
// };

// export default Index;

// const styles = StyleSheet.create({});

import React, {useEffect} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {fetchSubjects} from './slice/homeAction';
const YourScreenComponent = () => {
  const dispatch = useDispatch();
  const {subjects, loading, error} = useSelector(
    (state: any) => state?.homeReducer,
  );

  useEffect(() => {
    dispatch(fetchSubjects());
  }, [dispatch]);

  return (
    <View>
      {loading && <ActivityIndicator size="large" color="blue" />}
      {error && <Text>Error: {error}</Text>}
      {subjects.map(subject => (
        <View key={subject._id}>
          <Text>{subject.subject.Subject_name}</Text>
          {/* Render other subject details as needed */}
        </View>
      ))}
    </View>
  );
};

export default YourScreenComponent;
