// Import the necessary functions from Firebase SDK
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your Firebase web app's configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6N9jr9ESmi__8rhom1Pgm6lj7wmkjL3A",
  authDomain: "remy-login-data.firebaseapp.com",
  projectId: "remy-login-data",
  storageBucket: "remy-login-data.firebasestorage.app",
  messagingSenderId: "563905398924",
  appId: "1:563905398924:web:5a445c5ae648bcb25013a9",
  measurementId: "G-JRDY5C0F11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

// Export Firestore, collection, getDocs, and auth
export { firestore, collection, getDocs, auth };