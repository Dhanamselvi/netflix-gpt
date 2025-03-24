// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT8EFVN_shUKQpCEXSfmmB9z2a0CjgvL4",
  authDomain: "netflixgpt-c8fc1.firebaseapp.com",
  projectId: "netflixgpt-c8fc1",
  storageBucket: "netflixgpt-c8fc1.firebasestorage.app",
  messagingSenderId: "72937219645",
  appId: "1:72937219645:web:070a104ee892db72b9ac54",
  measurementId: "G-P2DVDVHS83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);