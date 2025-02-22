// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVxrUVLHNzXIGKrQmerwOGDU_Ov5eRtEo",
  authDomain: "netflixgpt-8d05c.firebaseapp.com",
  projectId: "netflixgpt-8d05c",
  storageBucket: "netflixgpt-8d05c.firebasestorage.app",
  messagingSenderId: "937314283031",
  appId: "1:937314283031:web:224748661b5e713ce97652",
  measurementId: "G-M0SZPZF96W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);