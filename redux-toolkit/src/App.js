import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
// import Counter from "./components/counter/Counter";
import ToggleDarkmode from "./components/toggle/ToggleDarkmode";
import ListCake from "./components/cake/ListCake";
import News from "./components/news/News";
import useLocalStorage from "./hooks/useLocalStorage";
import { cakeData } from "./api/fakeApi";
import { setCakes } from "./redux-toolkit/cakes/cakeSlice";
import MenuSticky from "./components/layout/MenuSticky";
import Sidebar from "./components/layout/Sidebar";
import CartModel from "./components/cart/CartModel";

function App() {
  const dispatch = useDispatch();
  // const { count } = useSelector((state) => state.counter);
  const { cakeList } = useSelector((state) => state.cakes);
  const { storedValue, setValue } = useLocalStorage("cakes", cakeData);
  useEffect(() => {
    dispatch(setCakes(storedValue));
  }, [dispatch, storedValue]);
  useEffect(() => {
    setValue(cakeList);
  }, [cakeList, setValue]);

  // function* generatorId() {
  //   let id = 1;
  //   while (true) {
  //     const increment = yield id;
  //     if (increment != null) {
  //       id += increment;
  //     } else {
  //       id++;
  //     }
  //   }
  // }
  // const generatorObject = generatorId();
  // console.log(generatorObject.next());
  // console.log(generatorObject.next(5));
  // console.log(generatorObject.next());
  // console.log(generatorObject.next());

  // function* generateFibonaci() {
  //   let prev = 0;
  //   let curr = 1;
  //   while (true) {
  //     yield curr;

  //     // Calculate the next number
  //     // const next = prev + curr;
  //     // prev = curr;
  //     // curr = next;
  //     // Es6 method
  //     [prev, curr] = [curr, prev + curr];
  //   }
  // }
  // const fibo = generateFibonaci();
  // console.log(fibo.next());
  // console.log(fibo.next());
  // console.log(fibo.next());
  // console.log(fibo.next());
  // console.log(fibo.next());
  // console.log(fibo.next());
  // console.log(fibo.next());

  // function* loopRange(from, to) {
  //   for (let i = from; i <= to; i++) {
  //     yield i;
  //   }
  //   return to + 1;
  // }
  // const range = loopRange(0, 10);
  // console.log("range", range);
  // for (const i of range) {
  //   console.log(i);
  // }
  return (
    <div className="App dark:bg-darkMain p-2">
      <CartModel></CartModel>
      <Sidebar></Sidebar>
      <MenuSticky></MenuSticky>
      <ToggleDarkmode></ToggleDarkmode>
      <ListCake></ListCake>
      <ToggleDarkmode></ToggleDarkmode>
      <News></News>
      {/* <h1>{`The count from App is: ${count}`}</h1>
      <Counter></Counter> */}
    </div>
  );
}

export default App;
