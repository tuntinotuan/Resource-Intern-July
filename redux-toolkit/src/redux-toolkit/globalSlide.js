import { createSlice } from "@reduxjs/toolkit";

const globalSlide = createSlice({
  name: "global",
  initialState: {
    showSidebar: true,
  },
  reducers: {
    toggleSidebar: (state, { payload }) => {
      return {
        ...state,
        showSidebar: payload,
      };
    },
  },
});

export const { toggleSidebar } = globalSlide.actions;
export default globalSlide.reducer;
