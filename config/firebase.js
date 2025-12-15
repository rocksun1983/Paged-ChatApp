import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAKEbwIPEsUdGiRQDKEEmOGxebz6BNEraE",
  authDomain: "paged-chatapp.firebaseapp.com",
  projectId: "paged-chatapp",
  storageBucket: "paged-chatapp.firebasestorage.app",
  messagingSenderId: "948408544454",
  appId: "1:948408544454:web:70919c88c671697cb87bc7"
};

// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
