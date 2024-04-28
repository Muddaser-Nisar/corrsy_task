import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  subjects: [],
  loading: false,
  error: null,
};

const homeSlice = createSlice({
  name: 'homeData',
  initialState,
  reducers: {
    fetchSubjectsStart(state, action) {
      state.loading = true;
      state.error = null;
    },
    fetchSubjectsSuccess(state, action) {
      state.loading = false;
      state.subjects = action.payload;
    },
    fetchSubjectsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {fetchSubjectsStart, fetchSubjectsSuccess, fetchSubjectsFailure} =
  homeSlice.actions;
export default homeSlice.reducer;
