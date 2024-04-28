import {combineReducers} from 'redux';
import shared from 'redux/Shared';
import homeReducer from 'screens/Home/slice/homeReducer';

const reducers = combineReducers({
  shared,
  homeReducer,
});

export default reducers;
