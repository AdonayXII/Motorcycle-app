// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRrxqx3JlPbPSGpN8TLYUtssY744mVI7c",
  authDomain: "motorcycle-app-3102b.firebaseapp.com",
  databaseURL: "https://motorcycle-app-3102b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "motorcycle-app-3102b",
  storageBucket: "motorcycle-app-3102b.appspot.com",
  messagingSenderId: "593221070684",
  appId: "1:593221070684:web:e059b8f168e80576d65b99",
  measurementId: "G-K4Q0K4XGJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

export default database;