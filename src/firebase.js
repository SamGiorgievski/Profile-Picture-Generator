// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRDxDFmHmLhR_UB-tATCMx_E4JoaHhNao",
  authDomain: "profile-maker-uploads.firebaseapp.com",
  projectId: "profile-maker-uploads",
  storageBucket: "profile-maker-uploads.appspot.com",
  messagingSenderId: "1037497175052",
  appId: "1:1037497175052:web:309973edca66a96b5ff229",
  measurementId: "G-3F6FB7YZJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);