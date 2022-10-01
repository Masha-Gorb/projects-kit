import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import {Header} from "./features/Header/Header";
import {MainPage} from "./features/Todolist/MainPage/MainPage";
import {GreetingPage} from "./features/GreetingPage/GreetingPage";
import {CurrencyPage} from "./features/Currency/CurrencyPage";
import {CustomPagination} from "./features/Pagination/Pagination";

function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <Routes>
          <Route path="/" element={<GreetingPage/>}>
          </Route>
          <Route path="/todos" element={<MainPage/>}>
          </Route>
          <Route path="/currency" element={<CurrencyPage/>}>
          </Route>
          <Route path="/pagination" element={<CustomPagination/>}>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
