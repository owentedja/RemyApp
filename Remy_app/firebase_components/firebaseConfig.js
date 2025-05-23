// Import the necessary functions from Firebase SDK
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your Firebase web app's configuration
const firebaseConfig = {
  apiKey: ""###################################",",
  authDomain: ""###################################",",
  projectId: ""###################################",",
  storageBucket: ""###################################",",
  messagingSenderId: ""###################################",",
  appId: ""###################################",",
  measurementId: ""###################################","
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

// Export Firestore, collection, getDocs, and auth
export { firestore, collection, getDocs, auth };
