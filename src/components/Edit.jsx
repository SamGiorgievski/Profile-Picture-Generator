import {useState} from 'react';
import "./Edit.scss";
import axios from "axios";
import { storage } from '../firebase';
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

export default function Edit() {

  const [imageUpload, setImageUpload] = useState(null);

  const fileSelectedHandler = (event) => {

    setImageUpload(event.target.files[0])
    console.log(event.target.files[0]);
  }
  
  const uploadImage = () => {
    if (imageUpload === null) return;

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload)
      .then(() => {
        alert("Image Uploaded");
      })

  }

  return (
    <div className="edit">
      <h1>Edit Image</h1>
      {/* {!pic && ( */}
            <img
              src={
                "https://via.placeholder.com/300/808080.png/fff?text=Upload+image+to+begin"
              }
              alt="uploaded_image"
              className= "upload"
            />
          {/* )} */}
      {/* {pic && <img src={pic.imagePath} alt="uploaded_image" className= "upload" />} */}
      <input 
      type="file"
      className="file_upload" 
      onChange={fileSelectedHandler}
      ></input>
      <button onClick={uploadImage}>Upload</button>
    </div>
  )
}
