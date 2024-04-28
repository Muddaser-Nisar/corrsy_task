import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiCall} from 'services/ApiManager';
import {apiName} from 'utils/constants/apiNames';
import {userData} from 'utils/constants/userData';
import {
  fetchSubjectsFailure,
  fetchSubjectsStart,
  fetchSubjectsSuccess,
} from './homeReducer';
export const fetchSubjects = createAsyncThunk(
  'homeData/fetchSubjects',
  async (params, {getState, dispatch}) => {
    dispatch(fetchSubjectsStart());
    try {
      const response = await apiCall.get(
        `${apiName.courseListing}${userData.userId}/${userData.gradeId}`,
      );
      const {data} = response.data;
      console.log('data', data);

      dispatch(fetchSubjectsSuccess(data));
    } catch (error) {
      dispatch(fetchSubjectsFailure(error.message));
    }
  },
);
