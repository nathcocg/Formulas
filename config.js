import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAWxiLLqVMVNBpsRBQxC858t0teNWZ5GPk",
    authDomain: "appcalculo-24b94.firebaseapp.com",
    projectId: "appcalculo-24b94",
    storageBucket: "appcalculo-24b94.appspot.com",
    messagingSenderId: "886187924334",
    appId: "1:886187924334:web:a9a8039cd981f3eece7f7f"
};
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.firestore();
