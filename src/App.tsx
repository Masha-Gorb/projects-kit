import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import {Header} from "./features/Header/Header";
import {MainPage} from "./features/MainPage/MainPage";
import {GreetingPage} from "./features/GreetingPage/GreetingPage";
import {CurrencyPage} from "./features/Currency/CurrencyPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<GreetingPage/>}>
        </Route>
        <Route path="/todos" element={<MainPage/>}>
        </Route>
        <Route path="/currency" element={<CurrencyPage/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
