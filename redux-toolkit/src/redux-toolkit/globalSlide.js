import { createSlice } from "@reduxjs/toolkit";

const globalSlide = createSlice({
  name: "global",
  initialState: {
    showSidebar: false,
    darkmode: false,
    showCart: false,
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
    toggleCart: (state, action) => ({
      ...state,
      showCart: action.payload,
    }),
  },
});

export const { toggleSidebar, toggleDarkmode, toggleCart } =
  globalSlide.actions;
export default globalSlide.reducer;
