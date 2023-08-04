import { createSlice } from "@reduxjs/toolkit";

const cakeSlice = createSlice({
  name: "cakes",
  initialState: {
    cakeList: [],
    cakeCart: [],
  },
  reducers: {
    setCakes: (state, action) => ({
      ...state,
      cakeList: action.payload,
    }),
    setFavorites() {},
    setCakesCart: (state, action) => ({
      ...state,
      cakeCart: action.payload,
    }),
    addCakesToCart: (state, action) => ({
      ...state,
      cakeCart: [...state.cakeCart, action.payload],
    }),
  },
});

export const { setCakes, setFavorites, setCakesCart, addCakesToCart } =
  cakeSlice.actions;
export default cakeSlice.reducer;
