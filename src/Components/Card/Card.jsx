import { useState } from "react";
import { Fragment } from "react";
import "./index.css";
import CarrouselZoom from "../../Components/CarrouselZoom/CarrouselZoom";

function Card(props) {
  // console.log(props);
  const [apear, setApear] = useState(false);
  return (
    <Fragment>
      <div
        className="Carditem"
        onClick={() => {
          if (props.Addon === true) {
            setApear(!apear);
            console.log(apear);
          }
        }}
      >
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
      <CarrouselZoom
        id={props.id}
        img1={props.min1}
        img2={props.min2}
        img3={props.min3}
        img4={props.min4}
        visibiliti={apear}
        visibilitiChange={(e) => {
          setApear(e);
        }}
      />
    </Fragment>
  );
}

export default Card;
