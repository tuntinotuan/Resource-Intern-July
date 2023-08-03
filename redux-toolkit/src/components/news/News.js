import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../../redux-toolkit/news/newsSlice";

const News = () => {
  const { news, loading, errorMessage } = useSelector((state) => state.news);
  console.log("news", news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  return (
    <div className="w-2/4 p-5 mx-auto mt-5 mb-5 bg-white rounded-lg shadow-md">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="block w-full p-5 transition-all border border-gray-200 rounded-md focus:border-blue-400"
          placeholder="Typing your keyword..."
          // defaultValue={query}
          // onChange={handleChangeQuery}
        />
      </div>
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
