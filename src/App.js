import React from "react";
import "./Style.css";
import Navbar from "./Component/Navbar";
import MainPage from './Component/MainPage'
import FirstView from "./Component/FirstView";

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <FirstView/>
      <MainPage/>
    </React.Fragment>
  );
}

export default App;
