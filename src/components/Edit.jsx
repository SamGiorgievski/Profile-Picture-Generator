import {useState} from 'react';
import "./Edit.scss";

export default function Edit() {

  const [pic, setPic] = useState({
    selectedFile: null,
    imagePath: null
  });

  const fileSelectedHandler = (event) => {
    const imagePath = URL.createObjectURL(event.target.files[0]);

    setPic({
      selectedFile: event.target.files[0],
      imagePath: {imagePath}
    })
    console.log(event.target.files[0]);
  }
  
  // const fileUploadHandler = (event) => {
  //   URL.createObjectURL(pic.selectedFile)
  // }

  return (
    <div className="edit">
      <h1>Edit Image</h1>
      {!pic.imagePath && (
            <img
              src={
                "https://via.placeholder.com/300/808080.png/fff?text=Upload+image+to+begin"
              }
              alt="uploaded_image"
              className= "upload"
            />
          )}
      {pic.imagePath && <img src={pic.imagePath} alt="uploaded_image" className= "upload" />}
      <input 
      type="file"
      className="file_upload" 
      onChange={fileSelectedHandler}
      ></input>
      {/* <button onClick={fileUploadHandler}>Upload</button> */}
    </div>
  )
}
