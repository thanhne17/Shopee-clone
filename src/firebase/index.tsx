// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClsi9-nSaAbZdcEYpjK7Woq7YEwx5kgfo",
  authDomain: "f8-clone-a4c9c.firebaseapp.com",
  projectId: "f8-clone-a4c9c",
  storageBucket: "f8-clone-a4c9c.appspot.com",
  messagingSenderId: "543748555068",
  appId: "1:543748555068:web:7780829d5269c26f5f1e39",
  measurementId: "G-2MBWH00ZLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);