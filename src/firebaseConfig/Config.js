// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5NHe7R23qTPWm8ykfy-wFWGN3yF388ag",
  authDomain: "e-kart-c09b6.firebaseapp.com",
  projectId: "e-kart-c09b6",
  storageBucket: "e-kart-c09b6.appspot.com",
  messagingSenderId: "614111260654",
  appId: "1:614111260654:web:ed578f3c8d2560ebcaa8ff",
  measurementId: "G-0PG33YZ94B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export { auth, provider };
