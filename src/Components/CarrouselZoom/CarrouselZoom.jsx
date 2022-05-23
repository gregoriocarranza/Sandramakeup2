import { Fragment } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CampañaDeModaPic1 from "../../assets/Portafolios/Preview_campaña_de_moda/1.png"
import CampañaDeModaPic2 from "../../assets/Portafolios/Preview_campaña_de_moda/2.png"
import CampañaDeModaPic3 from "../../assets/Portafolios/Preview_campaña_de_moda/3.png"
import CampañaDeModaPic4 from "../../assets/Portafolios/Preview_campaña_de_moda/4.png"
import "./index.css"

function CarrouselZoom(props) {
  return (
    <Fragment>
        <div className="content-carousel">
      <Carousel>
        <div className="image-carousel-div">
          <img src={CampañaDeModaPic1} className="image-carousel" alt="" />
        </div>
        <div className="image-carousel-div">
          <img src={CampañaDeModaPic2} className="image-carousel" alt="" />
        </div>
        <div className="image-carousel-div">
          <img src={CampañaDeModaPic3} className="image-carousel" alt="" />
        </div>
        <div className="image-carousel-div">
          <img src={CampañaDeModaPic4} className="image-carousel" alt="" />
        </div>
      </Carousel>
      </div>
    </Fragment>
  );
}
export default CarrouselZoom;
