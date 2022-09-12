//rxslice
import { createSlice } from "@reduxjs/toolkit";

const initialState = 1;

const numberReducer = createSlice({
  name: 'numberReducer',
  initialState,
  reducers: {
    changeNumber: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const {changeNumber} = numberReducer.actions;

export default numberReducer.reducer;
