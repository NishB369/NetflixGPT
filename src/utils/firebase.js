// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj5r530b5BAyoLoPxauTPvPlkDJuTRRr4",
  authDomain: "netflixgt-cfc57.firebaseapp.com",
  projectId: "netflixgt-cfc57",
  storageBucket: "netflixgt-cfc57.firebasestorage.app",
  messagingSenderId: "232184807601",
  appId: "1:232184807601:web:25a82b936b68c8289be290",
  measurementId: "G-056977FPRR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
