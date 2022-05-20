import "./index.css";

import { Fragment } from "react";

function Redes(props) {
//   console.log(props.pivot);
  return (
    <Fragment>
      <a href={props.url} target="_blank" className="redesCircle">
        <img className={props.class}src={props.link} alt="" />
      </a>
    </Fragment>
  );
}

export default Redes;
