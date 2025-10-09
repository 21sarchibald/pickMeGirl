
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk4sqio7YO1tSpQqZQkHWcSZ1qJrkXHYI",
  authDomain: "pickmegirl7.firebaseapp.com",
  projectId: "pickmegirl7",
  storageBucket: "pickmegirl7.firebasestorage.app",
  messagingSenderId: "91924496615",
  appId: "1:91924496615:web:d2d504f9d36fe8592ba242",
  measurementId: "G-JMT6XCCFZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);