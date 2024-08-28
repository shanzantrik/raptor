import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGSzcwvEGyLaqYZUGZotLLmJDep01dmUk",
  authDomain: "raptor-db13c.firebaseapp.com",
  projectId: "raptor-db13c",
  storageBucket: "raptor-db13c.appspot.com",
  messagingSenderId: "1085256418307",
  appId: "1:1085256418307:web:edd15d7ce408bcb84ffa36"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
