import "./index.css";

import { Fragment, useState, useRef } from "react";
import { Link } from "react-router-dom";

import Redes from "./Redes";
import FaceBook from "../../assets/Header/Facebook.png";
import Youtube from "../../assets/Header/Youtube.png";
import Instagram from "../../assets/Header/Instagram.png";

function NavBar({ pivot, setPivot }) {
  const [menuToggle, setMenuToggle] = useState(false);
  const refNav = useRef();
  const refMenu = useRef();
  const refBtnToggle = useRef();
  const refIcon = useRef();

  const handleToggle = () => {
    if (menuToggle) {
      setMenuToggle(false);
      refMenu.current.style.top = "-100%";
      refIcon.current.classList.replace("bi-x-lg", "bi-list");
    } else {
      setMenuToggle(true);
      const calculate = refNav.current.offsetTop + refNav.current.clientHeight -17;
      refMenu.current.style.top = calculate + "px";
      refIcon.current.classList.replace("bi-list", "bi-x-lg");
    }
  };
  return (
    <Fragment>
      <div className="menu-container">
      <nav ref={refNav} className="menu">
        <button ref={refBtnToggle} onClick={handleToggle} className="btnToggle">
          <i ref={refIcon} className="bi bi-list fs-1"></i>
        </button>
        <ul className="ul" ref={refMenu}>
          <li className="li">
            <Link
              to="/"
              className={pivot === 1 ? "btnSelected" : ""}
              onClick={() => {
                setPivot(1);
              }}
            >
              inicio
            </Link>
          </li>
          <li className="li">
            <Link
              to="/about"
              className={pivot === 2 ? "btnSelected" : ""}
              onClick={() => {
                setPivot(2);
              }}
            >
              sobre mi
            </Link>
          </li>
          <li className="li">
            <Link
              to="/services"
              className={pivot === 3 ? "btnSelected" : ""}
              onClick={() => {
                setPivot(3);
              }}
            >
              servicios
            </Link>
          </li>
          <li className="li">
            <Link
              to="/portfolio"
              className={pivot === 4 ? "btnSelected" : ""}
              onClick={() => {
                setPivot(4);
              }}
            >
              portafolios
            </Link>
          </li>
          <li className="li">
            <Link
              to="/contact"
              className={pivot === 5 ? "btnSelected" : ""}
              onClick={() => {
                setPivot(5);
              }}
            >
              contacto
            </Link>
          </li>
        </ul>

        <div className="RedesDiv">
          <Redes
            link={FaceBook}
            url="https://www.facebook.com/sandratorrez88"
            class="Facebook"
          />
          <Redes
            link={Youtube}
            url="https://www.youtube.com/channel/UC8wMykK6ELOb6W1jiPKOX0w"
            class="Youtube"
          />
          <Redes
            link={Instagram}
            url="https://www.instagram.com/sandratmua/"
            class="Instagram"
          />
        </div>
      </nav>
      </div>
    </Fragment>
  );
}

export default NavBar;
