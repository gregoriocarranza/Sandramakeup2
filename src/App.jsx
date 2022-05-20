import { Fragment } from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Inicio/index.jsx";
import About from "./Pages/Sobre_mi/index";
import Services from "./Pages/Servicios/index.jsx";
import Portfolio from "./Pages/Portafolio/index.jsx";
import Contact from "./Pages/Contacto/index.jsx";

import Header from "./Components/Header/Header";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
