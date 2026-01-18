import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import Tarifs from "./pages/Tarifs";
import Enseignement from "./pages/Enseignement";
import EcoleModerne from "./pages/EcoleModerne";
import Galerie from "./pages/Galerie";
import PiecesInscription from "./pages/PiecesInscription";
import Culture from "./pages/Culture";
import Icons from "./pages/Icons";

// Composant pour remonter en haut de page automatiquement
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Gère le scroll automatique à chaque changement de route */}
      <ScrollToTop />
      
      <Header />

      <main className="app-content">
        <Routes>
          {/* Pages principales */}
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Pages secondaires / Liens de redirection */}   
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/enseignement" element={<Enseignement />} />
          <Route path="/ecole-moderne" element={<EcoleModerne />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/pieces-inscription" element={<PiecesInscription />}/>
          <Route path="/culture" element={<Culture />} />
          <Route path="/icons" element={<Icons />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}