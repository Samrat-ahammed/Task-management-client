// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr6_bWk3_KfyeyKXims_bm5OmoXO34mbQ",
  authDomain: "task-management-ba767.firebaseapp.com",
  projectId: "task-management-ba767",
  storageBucket: "task-management-ba767.appspot.com",
  messagingSenderId: "668870002642",
  appId: "1:668870002642:web:490165d4de518137f2ea0b",
  measurementId: "G-YQXK3SY7NT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
