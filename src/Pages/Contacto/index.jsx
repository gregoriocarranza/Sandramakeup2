import { Fragment } from "react";
import Form from "../../Components/Form/Form.jsx";
import bannerAbout from "../../assets/Sobre_mi/banner-about.png";
import Redes from "../../Components/Header/Redes";
import FaceBook from "../../assets/Header/Facebook.png";
import Youtube from "../../assets/Header/Twiter.png";
import Instagram from "../../assets/Header/Instagram.png";
import gpsIcon from "../../assets/Contacto/icon/map-pin.png";
import mailicon from "../../assets/Contacto/icon/mail.png";
import celIcon from "../../assets/Contacto/icon/phone.png";
import "./index.css";

function Contacto() {
  return (
    <Fragment>
      <div className="banner-container">
        <img src={bannerAbout} alt="banner" className="banner-img" />
      </div>
      <div className="Contacto">
        <section className="Hablemos">
          <h2>Hablemos</h2>
          <p className="Text">
            Una persona preguntó si podía enseñarle a maquillar, no dudé en
            abrir mi estudio y crear el espacio en el que me hubiera gustado
            aprender. Así nació el estudio Sandra Torrez.
          </p>
          <a href="https://goo.gl/maps/2pHmxMEyUgDRj4rJ8" className="InfoLink">
            <img src={gpsIcon} alt="icon" /> Moreno, Buenos Aires, Argentina
          </a>
          <a href="mailto:Sandratorrez88@gmail.com" className="InfoLink">
            <img src={mailicon} alt="icon" /> Sandratorrez88@gmail.com
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+549 1130073328&text=Hola, me gustaria tener mas informacion sobre los cursos"
            className="InfoLink"
          >
            <img src={celIcon} alt="icon" />
            +549 1130073328
          </a>
          <div className="redesDiv">
            <Redes link={FaceBook} url="" class="Facebook" />
            <Redes link={Youtube} url="" class="Youtube" />
            <Redes
              link={Instagram}
              url="https://www.instagram.com/sandratmua/"
              class="Instagram"
            />
          </div>
        </section>
        <Form />
      </div>
    </Fragment>
  );
}

export default Contacto;
