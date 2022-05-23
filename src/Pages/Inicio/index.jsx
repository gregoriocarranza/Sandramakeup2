import banner from "../../assets/Inicio/Banner.png";
import perfil from "../../assets/Inicio/perfil-sandra.png";
import titulo from "../../assets/Inicio/titulo.png";
import cosmetic from "../../assets/Inicio/icon/Icon.png";
import beauty from "../../assets/Inicio/icon/Icon-1.png";
import student from "../../assets/Inicio/icon/Icon-2.png";
import { Fragment } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Title from "../../Components/Title/Title";
import Testimonial from "../../Components/Testimonial/Testimonial";

function Inicio({setPivot}) {
  return (
    <Fragment>
      <div className="banner-container">
        <img src={banner} alt="banner" className="banner-img" />
      </div>
      <section className="section-home-cover">
        <div className="cover-container layout-grid">
          <div className="perfil-hero">
            <img src={perfil} className="imagen-preview-home-img" alt="perfil" />
          </div>
          <div className="info-home">
            <img src={titulo} alt="sandra-torrez" />
            <div className="text-info-home">
              <p>
              Hace mas de 12 años que me sumergí en el mundo del make up. Cuando empecé sabia que me gustaba el arte y los colores, pero no sabia que en ese momento se despertaría en mi la pasión por el maquillaje, resaltar la belleza de las personas.
              </p>
            </div>
            <Link to="/about" className="btn-info" onClick={()=>{setPivot(2)}}>
              Conoceme Más
            </Link>
          </div>
        </div>
      </section>
      <section className="services-container">
    <Title />
  <div className="services-list-container">
    <div className="services-list">
      <img src={cosmetic} alt="cosmetic brush icon" />
      <span>Maquillaje social</span>
      <p>Servicio de Maquillaje personalizado a prueba de agua, hipoalergènico y de larga duraciòn.</p>
    </div>
    <div className="services-list">
    <img src={beauty} alt="beauty icon" />
      <span>Taller de automaquillaje</span>
      <p>Aprende a ser tu propia maquilladora para todos los dias. Conoce como preparar tu piel .</p>
    </div>
    <div className="services-list">
    <img src={student} alt="student icon" />
      <span>Carrera maquillaje S. inicial</span>
      <p>Sabras lo necesario para iniciar en el mundo del Makeup y asi poder iniciar tu carrera.</p>
    </div>
    </div>
    <Link to="/about" className="btn-info" onClick={()=>{setPivot(2)}}>
          Ver Más
        </Link>
  </section>
  <Testimonial />
<Footer />

    </Fragment>
  );
}

export default Inicio;
