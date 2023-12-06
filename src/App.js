import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sustainability from "../src/Components/Sustainability/Sustainability";
import Institucional from "../src/Components/Institutional/Institutional";
import Technology from "../src/Components/Technology/Technology";
import TopNavbar from "../src/Components/Navbars/TopNavbar";
import HomePage from "../src/Components/HomePage/HomePage";
import Contact from "../src/Components/Contact/Contact";
import StayIn from "../src/Components/StayIn/StayIn";
import Acting from "../src/Components/Acting/Products";
import Page404 from "../src/Components/Page404"
import Footer from "../src/Components/Footer/Footer";
import "../src/Config/i18n";
import "./index.css";
import './App.css';


function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <TopNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/institucional" element={<Institucional />} />
          <Route path="/produtos" element={<Acting />} />
          <Route path="/tecnologia" element={<Technology />} />
          <Route path="/sustentabilidade" element={<Sustainability />} />
          <Route path="/fique-por-dentro" element={<StayIn />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
