import React from "react";
import "./Style.css";
import Navbar from "./Component/Navbar";
import MainPage from './Component/MainPage'
import Header from "./Component/Header";

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Header/>
      <MainPage/>
    </React.Fragment>
  );
}

export default App;
