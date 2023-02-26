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
      <input type="file" onChange={fileSelectedHandler}></input>
      {/* <button onClick={fileUploadHandler}>Upload</button> */}
      {pic.imagePath && <img src={pic.imagePath} alt="Upload" />}
    </div>
  )
}
