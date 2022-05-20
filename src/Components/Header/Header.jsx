import "./index.css";

import { Fragment, useState } from "react";
import Redes from "./Redes";
import { Link } from "react-router-dom";

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
          <Redes url="" link="./assets/Header/Facebook.png" class="Facebook" />
          <Redes url="" link="./assets/Header/Twiter.png" class="Twiter" />
          <Redes url="https://www.instagram.com/sandratmua/" link="./assets/Header/Instagram.png" class="Instagram" />
        </div>
      </nav>
    </Fragment>
  );
}

export default NavBar;
