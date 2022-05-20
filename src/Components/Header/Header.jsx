import "./index.css";

import { Fragment, useState } from "react";
import Redes from "./Redes";
import { Link } from "react-router-dom";

import FaceBook from "../../assets/Header/Facebook.png";
import Youtube from "../../assets/Header/Twiter.png";
import Instagram from "../../assets/Header/Instagram.png";

function NavBar() {
  const [pivot, setPivot] = useState(1);
  return (
    <Fragment>
      <nav>
        <div className="Textos">
          <Link
            to="/"
            className={pivot === 1 ? "btnSelected" : ""}
            onClick={() => {
              setPivot(1);
            }}
          >
            inicio
          </Link>

          <Link
            to="/about"
            className={pivot === 2 ? "btnSelected" : ""}
            onClick={() => {
              setPivot(2);
            }}
          >
            sobre mi
          </Link>
          <Link
            to="/services"
            className={pivot === 3 ? "btnSelected" : ""}
            onClick={() => {
              setPivot(3);
            }}
          >
            servicios
          </Link>
          <Link
            to="/portfolio"
            className={pivot === 4 ? "btnSelected" : ""}
            onClick={() => {
              setPivot(4);
            }}
          >
            portafolios
          </Link>
          <Link
            to="/contact"
            className={pivot === 5 ? "btnSelected" : ""}
            onClick={() => {
              setPivot(5);
            }}
          >
            contacto
          </Link>
        </div>

        <div className="RedesDiv">
          <a href="" target="_blank" className="redesCircle">
            <img className="Facebook" src={FaceBook} alt="" />
          </a>
          <a href="" target="_blank" className="redesCircle">
            <img className="Youtube" src={Youtube} alt="" />
          </a>
          <a href="https://www.instagram.com/sandratmua/" target="_blank" className="redesCircle">
            <img className="Instagram" src={Instagram} alt="" />
          </a>
        </div>
      </nav>
    </Fragment>
  );
}

export default NavBar;
