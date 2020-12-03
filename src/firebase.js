import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCeU587J0_0ZgmWBQlvTiDQxRR4EyTwQ8I",
  authDomain: "clone-bdf68.firebaseapp.com",
  databaseURL: "https://clone-bdf68.firebaseio.com",
  projectId: "clone-bdf68",
  storageBucket: "clone-bdf68.appspot.com",
  messagingSenderId: "483991118230",
  appId: "1:483991118230:web:26286fd004b8e1ad687db7",
  measurementId: "G-K27MHCNLXY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
