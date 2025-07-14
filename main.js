
 
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-analytics.js";
  import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyBEvaqgSlJDyqBEBQVCk0i4nmbi13FBKHU",
    authDomain: "serenova-ff6ea.firebaseapp.com",
    projectId: "serenova-ff6ea",
    storageBucket: "serenova-ff6ea.firebasestorage.app",
    messagingSenderId: "863331344827",
    appId: "1:863331344827:web:804b80c3e9f1f1e3aa249e",
    measurementId: "G-Z8HQZ777WK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth = getAuth(app);
  auth.languageCode = 'en'
  const provider = new GoogleAuthProvider();

  const google-login = document.getElementById("google-login-btn");
