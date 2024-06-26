// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-abb22.firebaseapp.com",
  projectId: "mern-blog-abb22",
  storageBucket: "mern-blog-abb22.appspot.com",
  messagingSenderId: "1083418872982",
  appId: "1:1083418872982:web:a525cfa8c5665bf1c686b7"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);