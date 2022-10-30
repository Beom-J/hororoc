import React from "react";
import "./App.css";
import { BodyContainer } from "./components/body";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <BodyContainer />
      <Footer />
    </div>
  );
}

export default App;
