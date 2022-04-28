// Importa las funciones que necesites de las SDKs que necesites
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, set, child, update, remove } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
// TODO: Agrega SDKs para productos de Firebase que quieras usar
// https://firebase.google.com/docs/web/setup#available-libraries

// Tu configuración de aplicación de Firebase
// Para Firebase JS SDK v7.20.0 y posterior, measurementId es opcional
const firebaseConfig = {
    apiKey: "AIzaSyBFy6GjdOx0v52m5ScYDbnZPOCN_XNltpM",
    authDomain: "terravitaweb.firebaseapp.com",
    projectId: "terravitaweb",
    storageBucket: "terravitaweb.appspot.com",
    messagingSenderId: "963632262919",
    appId: "1:963632262919:web:265bd090aa09cde3f79fa2",
    measurementId: "G-Q2MGEJHXZ9"
  };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
