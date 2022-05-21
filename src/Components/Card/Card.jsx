import "./index.css";

import { Fragment, useState } from "react";

function Card(props) {
  //   const [change, setChage] = useState(false);
  console.log(props);
  return (
    <Fragment>
      <div className="Carditem">
        <section className="cardHeaderSection">
          <img className="cardIcon" src={props.icon} alt="" />
          <h2>{props.Title}</h2>
          <p>{props.Texto}</p>
        </section>

        <div class="imgsection">
          <div class="Image1">
            <img className="imgCardsI" src={props.img1} alt="" />
          </div>
          <div class="image2">
            <img className="imgCardsI" src={props.img2} alt="" />
          </div>
          <div class="image3">
            <img className="imgCardsI" src={props.img3} alt="" />
          </div>
          <div class="image4">
            <img className="imgCardsI" src={props.img4} alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;
