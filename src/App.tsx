import React from "react";
import "./App.css";
import { BodyContainer } from "./components/body";
import { Header } from "./components/header";
import { BottomNavigation } from "./components/bottom-navigation";

function App() {
  return (
    <div className="App">
      <Header />
      <BodyContainer />
      <BottomNavigation />
    </div>
  );
}

export default App;
