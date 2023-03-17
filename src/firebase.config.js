import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyALa_Ohp9XNUsMLPEIk4kvRv0Gquy9r_KU",
  authDomain: "gofoodiesapp.firebaseapp.com",
  databaseURL: "https://gofoodiesapp-default-rtdb.firebaseio.com",
  projectId: "gofoodiesapp",
  storageBucket: "gofoodiesapp.appspot.com",
  messagingSenderId: "601651614357",
  appId: "1:601651614357:web:97528561d6f711c589819c",
  measurementId: "G-CSPWMF9HHT"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app,firestore,storage};
