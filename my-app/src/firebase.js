const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");


const firebaseConfig = {
    apiKey: "AIzaSyDRthGxNrdqe-QZPPcBG5c7O2QKN8N__HA",
    authDomain: "hackaton-cliente.firebaseapp.com",
    databaseURL: "https://hackaton-cliente.firebaseio.com",
    projectId: "hackaton-cliente",
    storageBucket: "hackaton-cliente.appspot.com",
    messagingSenderId: "760277772262",
    appId: "1:760277772262:web:03df982e5e6b5e06a89827"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

