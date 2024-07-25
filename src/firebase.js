// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_HmlChEqgKIeT-ZUFSJjrBjzVLcjHcNM",
  authDomain: "book-bind-a-book-store.firebaseapp.com",
  projectId: "book-bind-a-book-store",
  storageBucket: "book-bind-a-book-store.appspot.com",
  messagingSenderId: "557912835807",
  appId: "1:557912835807:web:a9a0ee9596b996ec504b6a",
  measurementId: "G-R1JTG73YZR"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = app.db;
const analytics = getAnalytics(app);
const auth = getAuth(app); // Access auth object using getAuth function

export { db,auth };