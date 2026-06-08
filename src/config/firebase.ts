import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import {getAuth} from 'firebase/auth';
// import {...} from 'firebase/database';
import {getFirestore} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase

//Initialize Firebase

const firebaseConfig = {
  
};



const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app)

export {auth, db};
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
