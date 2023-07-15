// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2-pPnXbrl1JykiUm_-QiGi_njRoA4OKM",
  authDomain: "linkedin-ba75a.firebaseapp.com",
  projectId: "linkedin-ba75a",
  storageBucket: "linkedin-ba75a.appspot.com",
  messagingSenderId: "347277336926",
  appId: "1:347277336926:web:40b57bf9bcf7d973edafcf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore=getFirestore()
export const auth=getAuth(app);