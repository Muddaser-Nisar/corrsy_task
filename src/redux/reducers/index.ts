import {combineReducers} from 'redux';
import shared from 'redux/Shared';
import chaptersReducer from 'screens/Chapters/slice/chaptersReducer';
import homeReducer from 'screens/Home/slice/homeReducer';

const reducers = combineReducers({
  shared,
  homeReducer,
  chaptersReducer,
});

export default reducers;
