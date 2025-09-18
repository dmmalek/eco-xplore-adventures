// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvnIuLKV4ITQnG-l4IasqRmTtogmWVgTU",
  authDomain: "fir-common-auth.firebaseapp.com",
  projectId: "fir-common-auth",
  storageBucket: "fir-common-auth.firebasestorage.app",
  messagingSenderId: "230362962405",
  appId: "1:230362962405:web:9d8539c80ad226fa8bb70c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
