import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyBy47Nu-laAdksU_lyXC4FG-jilAsv3NZM",
  authDomain: "rooms-8a116.firebaseapp.com",
  projectId: "rooms-8a116",
  storageBucket: "rooms-8a116.appspot.com",
  messagingSenderId: "945432905949",
  appId: "1:945432905949:web:63b529754e504df3ca3334"
};

export const FirebaseApp = initializeApp( firebaseConfig );
export const storage = getStorage( FirebaseApp )