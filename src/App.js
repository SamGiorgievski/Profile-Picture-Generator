import React from 'react'
import { Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Generate from './components/Generate';
import Edit from './components/Edit';
import "./Navbar.scss";


export default function App() {
  return (
    <>
      <div className="navbar">
        <div className="title"> 
          <Link to="/"> Openai project</Link>
        </div>
        <ul className="features">
          <li>
            <Link to="/generate">Generate Image</Link>
          </li>
          <li>
            <Link to="/edit">Edit Image</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path ="/" index element = {<Home/>}/>
        <Route path="/generate" index element = {<Generate/>}/>
        <Route path="/edit" index element = {<Edit/>}/> 
      </Routes>
    </>
  )
}
