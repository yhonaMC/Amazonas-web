// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getFirestore } from "firebase/firestore";
import { FacebookAuthProvider, GoogleAuthProvider } from "@firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9SDBEb72E1Ct7BFjI3OAEb9J0tvAoEzw",
  authDomain: "as-web-4ad3f.firebaseapp.com",
  projectId: "as-web-4ad3f",
  storageBucket: "as-web-4ad3f.appspot.com",
  messagingSenderId: "1073972572643",
  appId: "1:1073972572643:web:5c0c2298ae61fff9dbf0d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore(app);

export { app, google, facebook, db };
