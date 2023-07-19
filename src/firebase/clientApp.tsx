// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJzvt88CFo_bhwcRI4B1gn-BXgy7IZ-Nc",
  authDomain: "skyscraper-652e1.firebaseapp.com",
  projectId: "skyscraper-652e1",
  storageBucket: "skyscraper-652e1.appspot.com",
  messagingSenderId: "306432711670",
  appId: "1:306432711670:web:5958e1c48b38df92bbc5d7",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, firestore, auth, storage };
