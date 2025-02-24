// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9qK0I21yNnK07Zl52ZKNLP3VrTOqd5RE",
  authDomain: "netflix-gpt-a1ec5.firebaseapp.com",
  projectId: "netflix-gpt-a1ec5",
  storageBucket: "netflix-gpt-a1ec5.firebasestorage.app",
  messagingSenderId: "304101316028",
  appId: "1:304101316028:web:8d0ff25897766ab81a87b9",
  measurementId: "G-RMNR24CGHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();