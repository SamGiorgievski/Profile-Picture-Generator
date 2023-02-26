import "./Home.scss";
import { useState, useEffect, Link} from "react";

export default function Home() {
  const [feature, setFeature] = useState ("generate");

  return (
    <div className="home">
      <h1 className="home_title">Home</h1>
      <div className="feature_list">
        <p className="feature1">Generate image: Generate a brand new profile picture using a text prompt</p>
        <p className="feature2">Edit image: Upload an existing picture, and type text suggestions of what you'd like openai to generate in your picture</p>
      </div>
    </div>
  )
}
