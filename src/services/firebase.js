// import firebase npm package
import firebase from "firebase/app";
// import the auth module from firebase
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyDriZaaM-XGyvPCOTOOgFb_5w5i5Ptio4A",
    authDomain: "simpl-survey.firebaseapp.com",
    projectId: "simpl-survey",
    storageBucket: "simpl-survey.appspot.com",
    messagingSenderId: "16247264850",
    appId: "1:16247264850:web:d65ef6a82cc6b0f44db18b"
};

//   initialize the firebase app
firebase.initializeApp(firebaseConfig);

// set up our provider for google sign in
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// define log in and log out actions
function login() {
    return auth.signInWithPopup(provider);
}
function logout() {
    return auth.signOut();
}
// export functionality

export {
    login,
    logout,
    auth
}