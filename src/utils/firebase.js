import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBS08QiPSoPG-IKvtgBXOeo_X-2IRleBJM",
  authDomain: "portofolio-8f4ca.firebaseapp.com",
  databaseURL: "https://portofolio-8f4ca-default-rtdb.firebaseio.com",
  projectId: "portofolio-8f4ca",
  storageBucket: "portofolio-8f4ca.firebasestorage.app",
  messagingSenderId: "776493169206",
  appId: "1:776493169206:web:c00ba3fcda4033b9747697",
  measurementId: "G-GRNZ65R4HG",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
