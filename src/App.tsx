import React from 'react';
import './App.css';
import {Header} from "./features/Header/Header";
import {GreetingPage} from "./features/GreetingPage/GreetingPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <GreetingPage/>
    </div>
  );
}

export default App;
