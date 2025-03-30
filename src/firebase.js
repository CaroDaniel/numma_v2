import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAnzVYIw7nHmCwM2cUadXS7fEw836qsDq8",
    authDomain: "nummav2.firebaseapp.com",
    projectId: "nummav2",
    storageBucket: "nummav2.firebasestorage.app",
    messagingSenderId: "283158046648",
    appId: "1:283158046648:web:9707efef0f15857cdcd14d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Auth
const auth = getAuth(app);

export { db, auth };