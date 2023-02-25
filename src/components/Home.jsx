import "./Home.scss";
import { useState, useEffect, Link} from "react";
import Navbar from "./Navbar";
import Generate from "./Generate";
import Edit from "./Edit";



export default function Home() {
  const [feature, setFeature] = useState ("generate");

  return (
    <div className="home">
      <Navbar/>

      {feature === "generate" && <Generate />}
      
    </div>
  )
}
