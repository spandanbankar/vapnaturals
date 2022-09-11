// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZU8kkg1LKAdGG1DpigWpBJdERdwX-JR4",
  authDomain: "vapnaturals.firebaseapp.com",
  projectId: "vapnaturals",
  storageBucket: "vapnaturals.appspot.com",
  messagingSenderId: "884250201245",
  appId: "1:884250201245:web:bf43dd27327dbf0f5ad874",
  measurementId: "G-1HR273RJ7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);