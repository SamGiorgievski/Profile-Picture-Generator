import "./Home.scss";
import { useState, useEffect} from "react";
import Generate from "./Generate";



export default function Home() {

  return (
    <div className="home">
      <h1 className = "title">Hello</h1>
      <Generate />
      
    </div>
  )
}
