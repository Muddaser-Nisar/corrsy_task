import {createSlice} from '@reduxjs/toolkit';
import {fetchLessonDetails} from './lessonDetailsAction';

// Define your initial state
const initialState = {
  lessonDetails: [],
  loading: false,
  error: null,
};

// Create a slice for chapters
const lessonDetailsSlice = createSlice({
  name: 'lesson',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchLessonDetails.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLessonDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.lessonDetails = action?.payload;
      })
      .addCase(fetchLessonDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Set error message from rejection handler
      });
  },
});

// Export action creators and reducer
export const lessonDetailsActions = lessonDetailsSlice.actions;
export default lessonDetailsSlice.reducer;
