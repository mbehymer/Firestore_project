// Import the functions you need from the SDKs you need
import { initializeApp, deleteApp } from "firebase/app";

import { getFirestore, doc, getDoc, collection, addDoc } from "firebase/firestore";

 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// const firebase = require("firebase");
// Required for side-effects
// require("firebase/firestore");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0YCGNuOFAeUw43Upz0uAl0T-IsSnc8JQ",
  authDomain: "learning-to-use-a-clouddb.firebaseapp.com",
  projectId: "learning-to-use-a-clouddb",
  storageBucket: "learning-to-use-a-clouddb.appspot.com",
  messagingSenderId: "257149530929",
  appId: "1:257149530929:web:8a8168eb944e1156aa7610",
  measurementId: "G-ME1Z32102C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const docRef = doc(db, "users", "0IMqJiCX0NiIibAajxr2");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());    

} else {
  console.log("No such document!");
}



try {
    const docRef = await addDoc(collection(db, "users"), {
        fname: "James",
        lname: "Turny",
        born: 1945
    });
    console.log("Document written with ID: ", docRef);
} catch (e) {
    console.error("Error adding document: ", e);
}
                    
deleteApp(app);

