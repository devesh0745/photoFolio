// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Importing firestore from firebase(because firebase has 2 databases).
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg_Gu6Ba-7s96HZZqNjWCCZwyqsB05trY",
  authDomain: "photofolio-app-6a905.firebaseapp.com",
  projectId: "photofolio-app-6a905",
  storageBucket: "photofolio-app-6a905.appspot.com",
  messagingSenderId: "63860300136",
  appId: "1:63860300136:web:a8b1b38046f818b0d71edd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize cloud firestore.
export const db=getFirestore(app);