import React from "react";
import "./App.css";
import { BodyContainer } from "./components/body";
import { Header } from "./components/header";
import { MenuBar } from "./components/menubar";

function App() {
  return (
    <div className="App">
      <Header />
      <BodyContainer />
      <MenuBar />
    </div>
  );
}

export default App;
