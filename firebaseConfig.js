import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBfDUh2tgTb7t6MMyU2P3_6hA_nfnHmKmg",
    authDomain: "auth1-cad44.firebaseapp.com",
    projectId: "auth1-cad44",
    storageBucket: "auth1-cad44.appspot.com",
    messagingSenderId: "587504861718",
    appId: "1:587504861718:web:1681d597524bd4d7a82b37"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const authentication = getAuth(app);

export { authentication };