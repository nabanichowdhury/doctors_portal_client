import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfzdNTYeoPN3N9WGzGvoMu-cnqJPvbQWg",
  authDomain: "doctors-portal-final-9460a.firebaseapp.com",
  projectId: "doctors-portal-final-9460a",
  storageBucket: "doctors-portal-final-9460a.appspot.com",
  messagingSenderId: "261141422670",
  appId: "1:261141422670:web:5e7e96e079894762d3191f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
