import {createSlice} from '@reduxjs/toolkit';

const sharedSlice = createSlice({
  name: 'shared',
  initialState: {
    onBoarded: false,
    isLoggedIn: false,
  },
  reducers: {
    setOnBoarded: (state, action) => {
      state.onBoarded = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
  //  extraReducers: {},
});

export const {setOnBoarded, setLoggedIn} = sharedSlice.actions;

export default sharedSlice.reducer;
