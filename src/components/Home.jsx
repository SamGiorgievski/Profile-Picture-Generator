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
  
  const response = await openai.createImage({
    prompt: "A cute baby sea otter",
    n: 2,
    size: "1024x1024",
  });

  console.log(response.data.data[0].url);

}

  return (
    <div className="home">
      <h1 className = "title">Hello</h1>
      <div className="generate">
        <h4>Generate Image:</h4>
        <form type="submit" className="generate_form">
          <label htmlFor="description">Enter a prompt:</label>
          <input 
          id="description"
          type="text"
          onChange={(event)=>{
            setGenerate({prompt: event.target.value})
          }} 
          >
          </input>
          <input 
          type="submit" 
          value="submit"
          onClick={generateImage}
          ></input>
        </form>
          <button onClick={generateImage}> submit</button>
        {result && <img src={result} className="result_image" />}


      </div>
      
    </div>
  )
}
