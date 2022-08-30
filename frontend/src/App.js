import React from 'react';
import List from './components/List';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ajouter from './components/Ajouter';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />}></Route>
          <Route path="/ajouter" element={<Ajouter />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
