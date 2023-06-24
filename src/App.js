import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import { initializeApp } from "firebase/app";


function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyB7LE0WXmhOFcB_YEnGiCaakbRMcITkxWE",
    authDomain: "noot-ecommerce.firebaseapp.com",
    projectId: "noot-ecommerce",
    storageBucket: "noot-ecommerce.appspot.com",
    messagingSenderId: "218431289615",
    appId: "1:218431289615:web:cd3fbfab08612c0b06667a"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  return (
    < >
      <Homepage />
    </>
  );
}

export default App;
