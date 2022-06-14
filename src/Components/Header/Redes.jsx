import "./index.css";

import { Fragment } from "react";

function Redes(props) {
  return (
    <Fragment>
      <a href={props.url} target={props.target} className="redesCircle">
        <img className={props.class}src={props.link} alt="" />
      </a>
    </Fragment>
  );
}

export default Redes;
