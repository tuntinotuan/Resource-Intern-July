import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Counter from "./components/counter/Counter";
import Sidebar from "./components/menu/Sidebar";
import ButtonSidebar from "./components/button/ButtonSidebar";
import ToggleDarkmode from "./components/toggle/ToggleDarkmode";
import ListCake from "./components/cake/ListCake";
import News from "./components/news/News";

function App() {
  const { count } = useSelector((state) => state.counter);
  return (
    <div className="App dark:bg-darkMain p-2">
      <ToggleDarkmode></ToggleDarkmode>
      <ListCake></ListCake>
      <Sidebar></Sidebar>
      <ButtonSidebar></ButtonSidebar>
      <ToggleDarkmode></ToggleDarkmode>
      <News></News>
      {/* <h1>{`The count from App is: ${count}`}</h1>
      <Counter></Counter> */}
    </div>
  );
}

export default App;
