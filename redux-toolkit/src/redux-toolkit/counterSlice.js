import { createSlice } from "@reduxjs/toolkit";

const counterSlide = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => ({
      ...state,
      count: state.count + 1,
    }),
    decrement: (state) => ({
      ...state,
      count: state.count - 1,
    }),
    incrementByValue: (state, { payload }) => ({
      ...state,
      count: state.count + payload.value,
    }),
  },
});

export const { increment, decrement, incrementByValue } = counterSlide.actions;
export default counterSlide.reducer;
