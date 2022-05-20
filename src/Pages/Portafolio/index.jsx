import "./index.css";

import { Fragment, useState } from "react";
import Card from "../../Components/Card/Card.jsx";
import banner from "../../assets/Sobre_mi/baner.png"
import Titulo from "../../assets/Portafolios/Group_20.png"



function Sobre_mi() {
  //   const [change, setChage] = useState(false);

  return (
    <Fragment>
      {/* <img className="Banner" src={banner} alt="" /> */}
      <div className="PortafolioDiv">
        <img
          className="portafolioTitle"
          src={Titulo}
          alt=""
        />

        <div className="CardContainer">
          <Card url="./assets/"/>
        </div>
      </div>
    </Fragment>
  );
}

export default Sobre_mi;


