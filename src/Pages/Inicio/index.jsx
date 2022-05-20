import banner from "../../assets/Inicio/Banner.png";
import perfil from "../../assets/Inicio/Perfil_sandra.png";
import titulo from "../../assets/Inicio/titulo.png";
import { Fragment } from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Inicio() {
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
            <Link to="/about" className="btn-info">
              Conoceme Más
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Inicio;
