import React from 'react';
import './App.css';
import {Header} from "./features/Header/Header";
import {MainPage} from "./features/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <MainPage/>
    </div>
  );
}

export default App;
