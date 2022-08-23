// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDq6KQPmthiUFmIhC4WPR7ZNUKjO1mA1U",
  authDomain: "trilluxo.firebaseapp.com",
  projectId: "trilluxo",
  storageBucket: "trilluxo.appspot.com",
  messagingSenderId: "1030105312256",
  appId: "1:1030105312256:web:580657da05e17e557e7ce5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;