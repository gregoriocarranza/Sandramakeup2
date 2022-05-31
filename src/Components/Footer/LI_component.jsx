import { Fragment, useState } from "react";
import Flecha from "../../assets/Footer/Vector.png";
import "./index.css";

function LI(props) {
  const [change, setChage] = useState(false);

  return (
    <Fragment>
      <li className={change ? "Selected" : "notSelected"}>
        <div
          onClick={() => {
            setChage(!change);
          }}
        >
          <img src={Flecha} alt="icon arrow" />
          <h3>{props.text}</h3>
        </div>
        <p className={change ? "pSelected" : "PnotSelected"}>{props.p}</p>
      </li>
    </Fragment>
  );
}

export default LI;
