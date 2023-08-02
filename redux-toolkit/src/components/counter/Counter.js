import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../../redux-toolkit/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementByValue = () => {
    dispatch(incrementByValue({ value: 10 }));
  };
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-5 border border-gray-200 max-w-[500px] rounded-md p-10">
        <h1>{`Count: ${count}`}</h1>
        <div className="flex items-center gap-5">
          <button
            className="bg-white rounded-md shadow-md p-3"
            onClick={handleIncrement}
          >
            Increment
          </button>
          <button
            className="bg-white rounded-md shadow-md p-3"
            onClick={handleDecrement}
          >
            Decrement
          </button>
          <button
            className="bg-white rounded-md shadow-md p-3"
            onClick={handleIncrementByValue}
          >
            Increment by 10
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
