import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Counter from "./components/counter/Counter";
import Sidebar from "./components/menu/Sidebar";
import ButtonSidebar from "./components/button/ButtonSidebar";

function App() {
  const { count } = useSelector((state) => state.counter);
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <ButtonSidebar></ButtonSidebar>
      <h1>{`The count from App is: ${count}`}</h1>
      <Counter></Counter>
    </div>
  );
}

export default App;
