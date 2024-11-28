import { Routes,Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { AboutPage } from "./components/AboutComponents/AboutPage";
import { Contact } from "./components/ContactComponent/Contact";
import { Shop } from "./components/Shop/Shop";
import { NewAccount } from "./components/Auth/NewAccount";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/newUser' element={<NewAccount />} />
      </Routes>
    </div>
  );
}

export default App;
