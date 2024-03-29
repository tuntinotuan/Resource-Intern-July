import { createAction, createSlice } from "@reduxjs/toolkit";

export const otherAction = createAction("updateLoading");

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    loading: false,
    errorMessage: "",
    query: "",
  },
  reducers: {
    setNews: (state, action) => ({
      ...state,
      news: action.payload,
    }),
    getNews() {},
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    setErrorMessage: (state, action) => ({
      ...state,
      errorMessage: action.payload,
    }),
    setQuery: (state, action) => ({
      ...state,
      query: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(otherAction, (state, action) => {
      state.loading = action.payload;
    });
  },
});
export const { getNews, setNews, setLoading, setErrorMessage, setQuery } =
  newsSlice.actions;
export default newsSlice.reducer;
