import { createSlice } from "@reduxjs/toolkit";

const globalSlide = createSlice({
  name: "global",
  initialState: {
    showSidebar: false,
    darkmode: false,
  },
  reducers: {
    toggleSidebar: (state, { payload }) => {
      return {
        ...state,
        showSidebar: payload,
      };
    },
    toggleDarkmode: (state, { payload }) => {
      return {
        ...state,
        darkmode: payload,
      };
    },
  },
});

export const { toggleSidebar, toggleDarkmode } = globalSlide.actions;
export default globalSlide.reducer;
