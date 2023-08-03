import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    loading: true,
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
});
export const { getNews, setNews, setLoading, setErrorMessage, setQuery } =
  newsSlice.actions;
export default newsSlice.reducer;
