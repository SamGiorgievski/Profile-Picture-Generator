import React from 'react'
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2> Openai project</h2>
      <ul className="features">
        <li>
          <a href="/generate">Generate Image</a>
        </li>
        <li>
          <a href="/edit">Edit Image</a>
        </li>
      </ul>
    </div>
  )
}
