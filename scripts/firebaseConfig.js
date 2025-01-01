// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD28G2RcIx3MLkR089FrCFqBK2DPa25PSk",
  authDomain: "tourism-in-sudan.firebaseapp.com",
  databaseURL: "https://tourism-in-sudan-default-rtdb.firebaseio.com",
  projectId: "tourism-in-sudan",
  storageBucket: "tourism-in-sudan.firebasestorage.app",
  messagingSenderId: "576631607618",
  appId: "1:576631607618:web:39cee687e67716250338db",
  measurementId: "G-B8Z6RSXB7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { db };