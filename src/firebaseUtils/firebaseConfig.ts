import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBDEtNyTYKttRSSeSfaEi_Whpd5-L0YqTs",
    authDomain: "resort-2ffe4.firebaseapp.com",
    databaseURL: "https://resort-2ffe4-default-rtdb.firebaseio.com",
    projectId: "resort-2ffe4",
    storageBucket: "resort-2ffe4.appspot.com",
    messagingSenderId: "990094852031",
    appId: "1:990094852031:web:dc00e891f3c57bc16a6b0a",
    measurementId: "G-Z63W53EW3Q"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore };
// export default firebaseConfig;
