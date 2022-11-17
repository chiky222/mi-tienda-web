import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBmDKzzP-uwU8NsNGs3KlOo2Iqpvl5TJgI",
  authDomain: "mi-tienda-web---react.firebaseapp.com",
  projectId: "mi-tienda-web---react",
  storageBucket: "mi-tienda-web---react.appspot.com",
  messagingSenderId: "188023468677",
  appId: "1:188023468677:web:0166ba7206b5cb28162fec"
};

const app = initializeApp(firebaseConfig);
export const baseDeDatos = getFirestore(app);