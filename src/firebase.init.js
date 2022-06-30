// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCjmE5tRVg5C8jcr6QbtEzkci-_3De9xmY",
    authDomain: "task-manager-4c04c.firebaseapp.com",
    projectId: "task-manager-4c04c",
    storageBucket: "task-manager-4c04c.appspot.com",
    messagingSenderId: "993838838823",
    appId: "1:993838838823:web:f3fa2bd601f4043ec54a02",
    measurementId: "G-HH3W2P4KMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;