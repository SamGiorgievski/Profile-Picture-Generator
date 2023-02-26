import { useState, useEffect} from "react";
import "./Generate.scss";

// import { generatePrompts } from '../utils/openai.js';
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default function Generate() {

    // image generate state
    const [generate, setGenerate] = useState ("");
    const [result, setResult] = useState ("");

  const generateImage = async (model, prompt) => {
  
    try {
    const response = await openai.createImage({
      prompt: generate,
      n: 2,
      size: "1024x1024",
    });
  
    console.log(response.data.data[0].url);
    setResult(response.data.data[0].url);
    
    } catch (error) {
      console.log(error);
    }
  
  }

  return (
    <div className="generate">
        <h1>Generate Image</h1>
          <input 
          className="description"
          type="text"
          onChange={(event)=>{
            setGenerate(event.target.value)
          }} 
          placeholder="Type something to generate"
          >
          </input>
          <button 
          type="submit" 
          value="submit"
          onClick={generateImage}
          >Submit</button>
        {result && <div className="result">
          <div>View result:</div>
          <img src={result} className="result_image" />
          </div>}


      </div>
  )
}
