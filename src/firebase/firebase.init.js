// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcxR-ulUxNKBmEODohVUEiaj3tLktlO00",
  authDomain: "recipe-book-app-c8a5c.firebaseapp.com",
  projectId: "recipe-book-app-c8a5c",
  storageBucket: "recipe-book-app-c8a5c.firebasestorage.app",
  messagingSenderId: "1097728504898",
  appId: "1:1097728504898:web:ffb84122fc8becb9d269db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app();