// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Analytics لازم نیست فعلاً برای تو
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBCSWRgPbtB8Rvzb-NWhMawUZXl_g8v5uE",
  authDomain: "todolist-88706.firebaseapp.com",
  projectId: "todolist-88706",
  storageBucket: "todolist-88706.firebasestorage.app",
  messagingSenderId: "510359029511",
  appId: "1:510359029511:web:75dd59185ac9dc693de7a2",
  measurementId: "G-WE59HFYFWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // پاک کن یا کامنت کن چون نمی‌خوای
export const db = getFirestore(app);
export const auth = getAuth(app);
