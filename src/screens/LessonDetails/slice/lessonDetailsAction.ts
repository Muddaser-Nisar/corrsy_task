import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiCall} from 'services/ApiManager';
import {apiName} from 'utils/constants/apiNames';

export const fetchLessonDetails = createAsyncThunk(
  'lesson/fetchLessonDetails',
  async (lessonId, {getState, rejectWithValue}) => {
    try {
      const response = await apiCall.get(`${apiName.lessonDetails}${lessonId}`);
      return response.data.data[0].widgets; // Extracting lesson details widgets data from API response
    } catch (error) {
      return rejectWithValue(error.response.data.message); // Pass error message to rejection handler
    }
  },
);
