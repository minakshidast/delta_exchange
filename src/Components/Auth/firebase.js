// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpHwwdgXbULEsm3ss5aNCrzlylyRWeEaM",
  authDomain: "deltaexchange-3723f.firebaseapp.com",
  projectId: "deltaexchange-3723f",
  storageBucket: "deltaexchange-3723f.appspot.com",
  messagingSenderId: "50168670950",
  appId: "1:50168670950:web:e4cab597e0d46bf2fee927",
  measurementId: "G-699DRGKE8Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
