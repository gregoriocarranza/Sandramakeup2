import "./index.css";
import CarrouselZoom from "../../Components/CarrouselZoom/CarrouselZoom.jsx";

import { Fragment, useState } from "react";

function Card(props) {
  const {Addon} = props;
  //   const [change, setChage] = useState(false);
  // console.log(props);
  return (
    <Fragment>
      <div className="Carditem">
        <section className="cardHeaderSection">
          <img className="cardIcon" src={props.icon} alt="" />
          <h2>{props.Title}</h2>
          <p>{props.Texto}</p>
        </section>
        <div className="imgsection">
          <div className="image">
            <img className="imgCardsI" src={props.img1} alt="" />
            <img className="imgCardsI" src={props.img2} alt="" />
            <img className="imgCardsI" src={props.img3} alt="" />
            <img className="imgCardsI" src={props.img4} alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;
