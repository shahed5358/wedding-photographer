// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ3mkriECBcHOYXJMPu3uleZ_qcfUCeM8",
  authDomain: "wedding-photographer-d8aca.firebaseapp.com",
  projectId: "wedding-photographer-d8aca",
  storageBucket: "wedding-photographer-d8aca.appspot.com",
  messagingSenderId: "714455912671",
  appId: "1:714455912671:web:719ed6d43b4eccd956996a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;