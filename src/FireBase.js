// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYdFqPCrZz-CVQ5KIF6B11iuWRHrhitDk",
  authDomain: "quizapp-6db77.firebaseapp.com",
  projectId: "quizapp-6db77",
  storageBucket: "quizapp-6db77.firebasestorage.app",
  messagingSenderId: "770730788406",
  appId: "1:770730788406:web:548b6a61f0885deb3cba97",
  measurementId: "G-FRK7ESP8SL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);