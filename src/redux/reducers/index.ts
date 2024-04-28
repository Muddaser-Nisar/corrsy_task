import {combineReducers} from 'redux';
import shared from 'redux/Shared';
import chaptersReducer from 'screens/Chapters/slice/chaptersReducer';
import homeReducer from 'screens/Home/slice/homeReducer';
import lessonDetailsReducer from 'screens/LessonDetails/slice/lessonDetailsReducer';

const reducers = combineReducers({
  shared,
  homeReducer,
  chaptersReducer,
  lessonDetailsReducer,
});

export default reducers;
