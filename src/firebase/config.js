// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "react-journal-b950c.firebaseapp.com",
  projectId: "react-journal-b950c",
  storageBucket: "react-journal-b950c.appspot.com",
  messagingSenderId: "249384838374",
  appId: "1:249384838374:web:6df720d099bfcc0338c727",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
// Para google Auth
export const FirebaseAuth = getAuth(FirebaseApp);
// Para la base de datos
export const Firestore = getFirestore(FirebaseApp);
