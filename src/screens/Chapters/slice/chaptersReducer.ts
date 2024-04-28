import {createSlice} from '@reduxjs/toolkit';
import {fetchChapters} from './chaptersAction';

// Define your initial state
const initialState = {
  chapters: [],
  lessons: [],
  loading: false,
  error: null,
};

// Create a slice for chapters
const chaptersSlice = createSlice({
  name: 'chapters',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchChapters.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChapters.fulfilled, (state, action) => {
        state.loading = false;
        state.chapters = action?.payload?.data[0]?.chapter;
        state.lessons = action?.payload?.data[0]?.lessons;
      })
      .addCase(fetchChapters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Set error message from rejection handler
      });
  },
});

// Export action creators and reducer
export const chaptersActions = chaptersSlice.actions;
export default chaptersSlice.reducer;
