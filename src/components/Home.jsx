import "./Home.scss";
import { useState, useEffect} from "react";
import axios from "axios";
import { generatePrompts } from '../utils/openai.js';


export default function Home() {
  const [edit, setEdit] = useState({
    initial: "",
    mask: "",
    prompt: ""
  });

  const [generate, setGenerate] = useState ({
    prompt: ""
  });

  const [result, setResult] = useState ({
    link: ""
  });

  useEffect(() => {
    console.log(`generate: ${generate.prompt}`);
  }, [generate])

  const generateImage = async () => {
    generatePrompts();
    
  }

  return (
    <div className="title home">
      <h1>Hello</h1>
      <div className="generate">
        <h4>Generate Image:</h4>
        <form type="submit">
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


      </div>
      
    </div>
  )
}
