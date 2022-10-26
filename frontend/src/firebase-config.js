// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKTgYP-ub0awFq5B6MlejSA4wGaqUsKAk",
  authDomain: "react-crud-9967e.firebaseapp.com",
  projectId: "react-crud-9967e",
  storageBucket: "react-crud-9967e.appspot.com",
  messagingSenderId: "357884665612",
  appId: "1:357884665612:web:c8289508c4a9634716f329",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
