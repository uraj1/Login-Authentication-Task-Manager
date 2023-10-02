
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-W-43gB8AQ4MqIy1XsIf9Dm7bOohXyCM",
  authDomain: "user-authentication-29434.firebaseapp.com",
  projectId: "user-authentication-29434",
  storageBucket: "user-authentication-29434.appspot.com",
  messagingSenderId: "1087719706783",
  appId: "1:1087719706783:web:8c80657a6ed572981552aa",
  measurementId: "G-9PBG5GJRRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export{app, auth, analytics}