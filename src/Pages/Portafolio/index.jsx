import "./index.css";

import { Fragment, useState } from "react";
import Card from "../../Components/Card/Card.jsx";

function Sobre_mi() {
  //   const [change, setChage] = useState(false);

  return (
    <Fragment>
      {/* <img className="Banner" src="./assets/Sobre_mi/baner.png" alt="" /> */}
      <div className="PortafolioDiv">
        <img
          className="portafolioTitle"
          src="./assets/Portafolios/Group_20.png"
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


