import { useState, useEffect } from 'react';
import "./Edit.scss";
import axios from "axios";
import { storage } from '../firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export default function Edit() {

  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  const imageListRef = ref(storage, "images/");

  const fileSelectedHandler = (event) => {

    setImageUpload(event.target.files[0])
    console.log(event.target.files[0]);
  }
  
  const uploadImage = () => {
    if (imageUpload === null) return;

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageList((prev) => [...prev, url]);
        })
      })

  }

  useEffect(() => {
    listAll(imageListRef)
      .then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item)
            .then((url) => {
              setImageList((prev) => [...prev, url]);
            })
        })
      })
  }, [])

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
      <div>
        <input 
        type="file"
        className="file_upload" 
        onChange={fileSelectedHandler}
        ></input>
      </div>
      <button onClick={uploadImage}>Upload</button>
      <div className="user_images">
        <h2 className="user_images_title">Profile pictures</h2>
        {imageList.map((url) => {
          return <img src={url} key={url} className="user_image"/>
        })}
      </div>
    </div>
  )
}
