import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPleQTnY7CKLqTZYo_OMeIob1fl-P3fPc",
  authDomain: "shopgpt-2bd79.firebaseapp.com",
  projectId: "shopgpt-2bd79",
  storageBucket: "shopgpt-2bd79.appspot.com",
  messagingSenderId: "314217589878",
  appId: "1:314217589878:web:a6aa29e8cd5c2251264357"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
