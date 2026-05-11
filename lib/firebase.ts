import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdMJCDCe_PrMzhfttNkhoraS0QMsbRHL4",
  authDomain: "interior-design-6046e.firebaseapp.com",
  projectId: "interior-design-6046e",
  storageBucket: "interior-design-6046e.firebasestorage.app",
  messagingSenderId: "547436953437",
  appId: "1:547436953437:web:14ab0fe0f89149ed57f2b4",
};

const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
