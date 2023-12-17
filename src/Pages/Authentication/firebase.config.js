import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD4fOSfIY0oQwZ17Cku6fVpjkIqJGLz-tQ",
  authDomain: "pethouse-0.firebaseapp.com",
  projectId: "pethouse-0",
  storageBucket: "pethouse-0.appspot.com",
  messagingSenderId: "924481516205",
  appId: "1:924481516205:web:d274b5d7a6568e73364c24"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);