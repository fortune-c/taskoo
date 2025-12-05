import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


export default function nav(path) {
    window.location.hash = path
}

// firebase
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDERID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };