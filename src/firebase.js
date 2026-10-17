import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWTffjTjsoCMXsd21qcyy6E-6a0yokmng",
  authDomain: "projecte-4f175.firebaseapp.com",
  projectId: "projecte-4f175",
  storageBucket: "projecte-4f175.firebasestorage.app",
  messagingSenderId: "648329572436",
  appId: "1:648329572436:web:def80de009313e349b3dc1",
  measurementId: "G-ET4CPQKV4G"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
