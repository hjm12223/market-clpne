import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBPUPdKThflNHwV4-kJUNxP3xtvRcoDW3Y",
  authDomain: "carrot-clone-market.firebaseapp.com",
  databaseURL: "https://carrot-clone-market-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "carrot-clone-market",
  storageBucket: "carrot-clone-market.appspot.com",
  messagingSenderId: "290349899394",
  appId: "1:290349899394:web:6bcc8d85b90092c5fa9e9b",
  measurementId: "G-4TW1WVH86K"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);


