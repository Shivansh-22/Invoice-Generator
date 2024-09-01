// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
export const firebaseConfig = {
   apiKey: "AIzaSyDCF9-fJfj7IGGPBm1g63I_BwjOQvPRRS4",
  authDomain: "invoice-c5528.firebaseapp.com",
  projectId: "invoice-c5528",
  storageBucket: "invoice-c5528.appspot.com",
  messagingSenderId: "840309781635",
  appId: "1:840309781635:web:9d6f1c0dab59b1835ad7b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db };
