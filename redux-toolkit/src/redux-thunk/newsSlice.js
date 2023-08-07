import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requestGetNews from "../redux-toolkit/news/requests";

export const handleFetchNews = createAsyncThunk(
  "news/handleFetchNews",
  async (query, thunkAPI) => {
    const response = await requestGetNews(query);
    return response.data.hits;
  }
);

export const setLoading = createAction("control/loading");
export const setQuery = createAction("change/query");

const initialState = {
  news: [],
  loading: true,
  errorMessage: "",
  query: "",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleFetchNews.fulfilled, (state, action) => {
        state.news = action.payload;
        state.loading = false;
      })
      .addCase(handleFetchNews.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(handleFetchNews.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(setLoading, (state, action) => {
        state.loading = action.payload;
      })
      .addCase(setQuery, (state, action) => {
        state.query = action.payload;
      });
  },
});

export default newsSlice.reducer;
