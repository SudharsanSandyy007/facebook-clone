import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCOJAZjsvfm_6Q85VQi-X4BojX5V8NQt6Q",
  authDomain: "facebook-clone-9c88c.firebaseapp.com",
  projectId: "facebook-clone-9c88c",
  storageBucket: "facebook-clone-9c88c.appspot.com",
  messagingSenderId: "766448159108",
  appId: "1:766448159108:web:82b9d22d8aa735f987b5d1",
  measurementId: "G-PYQDQ3BFE3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
