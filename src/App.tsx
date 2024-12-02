import { Routes,Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { AboutPage } from "./components/AboutComponents/AboutPage";
import { Contact } from "./components/ContactComponent/Contact";
import { Shop } from "./components/Shop/Shop";
import { NewAccount } from "./components/Auth/NewAccount";
import { Login } from "./components/Auth/Login";

import { initializeApp } from "firebase/app";
import Sneakers from "./components/Shop/sneakers/Sneakers";

const firebaseConfig = {
  apiKey: "AIzaSyCSI-ticgne4bI5sfIwM4Y138voPBFXIAE",
  authDomain: "foot-finds.firebaseapp.com",
  projectId: "foot-finds",
  storageBucket: "foot-finds.firebasestorage.app",
  messagingSenderId: "449316080948",
  appId: "1:449316080948:web:c01fc5957926b3f4796961",
  measurementId: "G-YGC0R3FSPD"
};

initializeApp(firebaseConfig);
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path="/sneakers" element={<Sneakers />} />
        <Route path='/newUser' element={<NewAccount />} />
      </Routes>
    </div>
  );
}

export default App;
