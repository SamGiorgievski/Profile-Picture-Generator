import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Generate from './components/Generate';
import Edit from './components/Edit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element = {<Home/>}/>
      <Route path="/generate" index element = {<Generate/>}/>
      <Route path="/edit" index element = {<Edit/>}/> 
    </Routes>
  </BrowserRouter>
);