// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQtbtgqqpiA6tHiiO4ZhJsVW0laRJprJk",
    authDomain: "task-management-platform-828e1.firebaseapp.com",
    projectId: "task-management-platform-828e1",
    storageBucket: "task-management-platform-828e1.appspot.com",
    messagingSenderId: "564321578572",
    appId: "1:564321578572:web:ad64261548976590750ee9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;