import "./Home.scss";
import { useState, useEffect} from "react";
// import { generatePrompts } from '../utils/openai.js';
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


export default function Home() {

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

const generateOtter = async (model, prompt) => {
  
  try {
  const response = await openai.createImage({
    prompt: "A cute baby sea otter",
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
    <div className="home">
      <h1 className = "title">Hello</h1>
      <div className="generate">
        <h4>Generate Image:</h4>
          <input 
          id="description"
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
          <button className="otter" onClick={generateOtter}> Click for otter</button>
        {result && <div className="result">
          <div>View result:</div>
          <img src={result} className="result_image" />
          </div>}


      </div>
      
    </div>
  )
}
