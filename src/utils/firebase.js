// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8iueRyNdWsnc-zPhtH-_2fIK4Hisx-0o",
  authDomain: "waysdoor-49cb0.firebaseapp.com",
  projectId: "waysdoor-49cb0",
  storageBucket: "waysdoor-49cb0.appspot.com",
  messagingSenderId: "683557545084",
  appId: "1:683557545084:web:9f7f9f1290a82b2146d5f9",
  measurementId: "G-7K7M7NNYY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);