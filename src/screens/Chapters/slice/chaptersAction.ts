import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiCall} from 'services/ApiManager';
import {apiName} from 'utils/constants/apiNames';

export const fetchChapters = createAsyncThunk(
  'chapters/fetchChapters',
  async (subjectId, {getState, rejectWithValue}) => {
    try {
      const response = await apiCall.get(
        `${apiName.chapterListing}${subjectId}`,
      );
      console.log(
        'JSON.stringify(response.data)',
        JSON.stringify(response.data),
      );

      return response.data; // Extracting chapters data from API response
    } catch (error) {
      return rejectWithValue(error.response.data.message); // Pass error message to rejection handler
    }
  },
);
