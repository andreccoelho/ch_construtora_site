
import React from "react";
import { createRoot } from "react-dom/client";

import Home from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Fotos from "./pages/Fotos";
import Atletas from "./pages/Atletas";
import Sobre from "./pages/Sobre";
import Obras from "./pages/Obras";
import Condominio from "./pages/Condominio";
import ScrollToTop from "./components/ScrollToTop";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fotos" element={<Fotos />} />
        <Route path="/atletas" element={<Atletas />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/obras" element={<Obras />} />
        <Route path="/condominios/:slug" element={<Condominio />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
