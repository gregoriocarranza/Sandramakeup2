import "./index.css";

import { Fragment, useState } from "react";

function Sobre_mi() {
  // const [change, setChage] = useState(false);

  return (
    <Fragment>
      <img className="Banner" src="./assets/Sobre_mi/baner.png" alt="" />

      <section className="divSection">
        <div className="imagenPreviewe">
          <img src="./assets/Sobre_mi/Perfil_sandra.png" alt="" />
        </div>
        <div className="textAndPresentation">
          <img src="./assets/Sobre_mi/titulo.png" alt="" />
          <div className="Text">
            <p>
              Hace mas de 12 años que me sumergí en el mundo del make up. Cuando
              empecé sabia que me gustaba el arte y los colores, pero no sabia
              que en ese momento se despertaría en mi la pasión por el
              maquillaje, <b>resaltar la belleza de las personas</b>.
            </p>
            <br />
            <p>
              En los inicios maquille para la{" "}
              <b>Escuela de Cine nacional (ENERC)</b>, campañas fotográficas y
              sigo transformando novias y quinceañeras, acompañándolas en esa
              ocasión tan especial.
            </p>
            <br />
            <p>
              Fui formada por diversos maestros y maestras del arte
              enriqueciendo mi carrera la cual aun hoy sigue en constante
              crecimiento de capacitación.
            </p>
            <br />
            <p>
              Una persona preguntó si podía enseñarle a maquillar, no dudé en
              abrir mi estudio y crear el espacio en el que me hubiera gustado
              aprender. Así nació el estudio <b>Sandra Torrez</b>.
            </p>
            <br />
          </div>
        </div>
      </section>
      <section className="alCineSection">
        <h3>Trayectoria en el cine</h3>
        <section className="alCineImg">
          <div className="divVideos">
            <img src="./assets/Sobre_mi/11.png" alt="" />
            <a href="https://play.cine.ar/INCAA/produccion/3997">
              Maquillé para CineAr. Pelicula “MAYO EN LA AVENIDA” DIRECTOR:
              Diego Baridó Productora:Silvana Cascardo: @rouge.sil
            </a>
          </div>
          <div className="divVideos">
            <img src="./assets/Sobre_mi/22.png" alt="" />
            <a href="https://play.cine.ar/INCAA/produccion/3997">
              Maquillé para CineAr. Pelicula “MAYO EN LA AVENIDA” DIRECTOR:
              Diego Baridó Productora:Silvana Cascardo: @rouge.sil
            </a>
          </div>
        </section>
      </section>
    </Fragment>
  );
}

export default Sobre_mi;
