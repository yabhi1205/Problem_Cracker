// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfUScYDt_pDN-AIg3LLWj-BZNMxox5gV8",
  authDomain: "problemcracker-21c83.firebaseapp.com",
  projectId: "problemcracker-21c83",
  storageBucket: "problemcracker-21c83.appspot.com",
  messagingSenderId: "678207767116",
  appId: "1:678207767116:web:78401349b583b81130eae9",
  measurementId: "G-P7E7LXGFJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};