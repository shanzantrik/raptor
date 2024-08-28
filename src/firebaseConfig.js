import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGSzcwvEGyLaqYZUGZotLLmJDep01dmUk",
  authDomain: "raptor-db13c.firebaseapp.com",
  projectId: "raptor-db13c",
  storageBucket: "raptor-db13c.appspot.com",
  messagingSenderId: "1085256418307",
  appId: "1:1085256418307:web:edd15d7ce408bcb84ffa36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the auth service
const auth = getAuth(app);

export { auth };
