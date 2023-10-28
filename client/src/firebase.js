// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-mern-cb11d.firebaseapp.com",
  projectId: "real-estate-mern-cb11d",
  storageBucket: "real-estate-mern-cb11d.appspot.com",
  messagingSenderId: "422752125804",
  appId: "1:422752125804:web:e7a1f3b55eb5c4a96ba949",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
