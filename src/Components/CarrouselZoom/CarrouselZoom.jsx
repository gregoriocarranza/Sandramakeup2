import { Fragment } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./index.css";

function CarrouselZoom(props) {
  const { visibiliti } = props;
  // console.log(props);

  return (
    <Fragment>
      <div
        className={
          visibiliti
            ? "content-carousel carrouselVisible"
            : "content-carousel carouselHidden"
        }
      >
        <button
          className="closeButton"
          onClick={() => {
            props.visibilitiChange(!visibiliti);
            
          }}
        >
          X
        </button>
        <Carousel>
          <div className="image-carousel-div">
            <img src={props.img1} className="image-carousel" alt="" />
          </div>
          <div className="image-carousel-div">
            <img src={props.img2} className="image-carousel" alt="" />
          </div>
          <div className="image-carousel-div">
            <img src={props.img3} className="image-carousel" alt="" />
          </div>
          <div className="image-carousel-div">
            <img src={props.img4} className="image-carousel" alt="" />
          </div>
        </Carousel>
      </div>
    </Fragment>
  );
}
export default CarrouselZoom;
