import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { debounce } from "lodash";
// import {
//   getNews,
//   otherAction,
//   setQuery,
// } from "../../redux-toolkit/news/newsSlice";
import {
  handleFetchNews,
  setLoading,
  setQuery,
} from "../../redux-thunk/newsSlice";

const News = () => {
  const { news, loading, errorMessage, query } = useSelector(
    (state) => state.news
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleFetchNews(query));
  }, [dispatch, query]);
  // useEffect(() => {
  //   dispatch(getNews(query));
  // }, [dispatch, query]);
  const handleChangeQuery = debounce((e) => {
    dispatch(setQuery(e.target.value));
    // dispatch(setQuery(e.target.value));
  }, 500);
  const controlLoadingWithExtraReducers = () => {
    dispatch(setLoading(!loading));
    // dispatch(otherAction(!loading));
  };
  return (
    <div className="w-2/4 p-5 mx-auto mt-5 mb-5 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="block w-full p-5 transition-all border border-gray-200 rounded-md focus:border-blue-400"
          placeholder="Typing your keyword..."
          defaultValue={query}
          onChange={handleChangeQuery}
        />
      </div>
      <button
        className="text-white bg-orange-500 p-3 rounded-md mb-5"
        onClick={controlLoadingWithExtraReducers}
      >
        Control Loading with extraReducers
      </button>
      {loading && (
        <div className="w-8 h-8 mx-auto my-10 border-4 border-r-4 border-blue-500 rounded-full loading border-r-transparent animate-spin"></div>
      )}
      {!loading && errorMessage && (
        <p className="my-5 text-red-400">{errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          news.length > 0 &&
          news.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={item.title} className="p-3 bg-gray-100 rounded-md">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default News;
