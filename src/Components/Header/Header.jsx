import "./index.css";

import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import Redes from "./Redes";
import FaceBook from "../../assets/Header/Facebook.png";
import Youtube from "../../assets/Header/Youtube.png";
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
          <Redes link={FaceBook} url="https://www.facebook.com/sandratorrez88" class="Facebook" />
          <Redes link={Youtube} url="https://www.youtube.com/channel/UC8wMykK6ELOb6W1jiPKOX0w" class="Youtube" />
          <Redes
            link={Instagram}
            url="https://www.instagram.com/sandratmua/"
            class="Instagram"
          />
        </div>
      </nav>
    </Fragment>
  );
}

export default NavBar;
