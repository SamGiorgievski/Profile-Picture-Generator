import { useState, useEffect} from "react";
import "./Generate.scss";
import { storage } from '../firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

// import { generatePrompts } from '../utils/openai.js';
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default function Generate() {

    // image generate state
    const [generate, setGenerate] = useState ("");
    const [loading, setLoading] = useState ("");
    const [result, setResult] = useState ("");

  const generateImage = async (model, prompt) => {
    setLoading(true);
    try {
    const response = await openai.createImage({
      prompt: generate,
      n: 2,
      size: "1024x1024",
    });
    setLoading(false);
    setResult(response.data.data[0].url);
    
    } catch (error) {
      console.log(error);
    }
  
  }

  return (
    <div className="generate">
        <h1>Generate Image</h1>
          <textarea
          className="description"
          placeholder="Enter a prompt"
          type="text"
          onChange={(event)=>{setGenerate(event.target.value)}} 
          row="5"
          cols="50"
          />
          <button onClick={generateImage}>Generate</button>

        {loading && 
        <div className="loading">
          Loading...
        </div>}
        
        {result && 
        <div className="result">
          <div className="result_text">View result:</div>
          <img src={result} className="result_image" />
        </div>}


      </div>
  )
}
