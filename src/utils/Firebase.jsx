// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXTDX6JDHQV4EHK_Lf7cME8dHfKF_EsVE",
  authDomain: "netflixgpt-2ab24.firebaseapp.com",
  projectId: "netflixgpt-2ab24",
  storageBucket: "netflixgpt-2ab24.firebasestorage.app",
  messagingSenderId: "626602894564",
  appId: "1:626602894564:web:620e8d0ca672dfb759b8f1",
  measurementId: "G-XG8PV2DPK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const  auth = getAuth();
