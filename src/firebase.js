// Import the functions you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your friend's Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBuEFOg5DtM6HNzwS7mKJoSf8EOVvx5Pvw",
    authDomain: "clipboardapp-2d24b.firebaseapp.com",
    projectId: "clipboardapp-2d24b",
    storageBucket: "clipboardapp-2d24b.firebasestorage.app",
    messagingSenderId: "1003869557850",
    appId: "1:1003869557850:web:bb3118d2cbcd9b754b7463"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore database
export const db = getFirestore(app);
