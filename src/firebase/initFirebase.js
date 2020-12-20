import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyAtF68Kw9ocvE_ilurrCE5GBKsT4Mb3bNs',
    authDomain: 'triolingo-817f9.firebaseapp.com',
    projectId: 'triolingo-817f9',
    storageBucket: 'triolingo-817f9.appspot.com',
    appId: '1:845896199798:web:6a2c14872aeae37619b957',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const storage = firebase.storage();

export { firestore, storage };
