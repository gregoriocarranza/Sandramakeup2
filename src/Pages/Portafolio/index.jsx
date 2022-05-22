import { Fragment, useState } from "react";
import Card from "../../Components/Card/Card.jsx";
import banner from "../../assets/Sobre_mi/baner.png";
import Titulo from "../../assets/Portafolios/Group_20.png";
import Footer from "../../Components/Footer/Footer";
import data from "../../helpers/dataPortafolio";
import "./index.css";
import CarrouselZoom from "../../Components/CarrouselZoom/CarrouselZoom.jsx";

function Sobre_mi() {
  //   const [change, setChage] = useState(false);

  return (
    <Fragment>
      {/* <img className="Banner" src={banner} alt="" /> */}
      <div className="PortafolioDiv">
        <section className="portafolioTitle">
          <img src={Titulo} alt="" />
        </section>

        <div className="CardContainer">
          {data.map((card, index) => (
            <Card
              icon={card.icon}
              Title={card.Title}
              Texto={card.Texto}
              img1={card.img1}
              img2={card.img2}
              img3={card.img3}
              img4={card.img4}
              key={index}
            />
          ))}
        </div>
      </div>
      <CarrouselZoom />
      <Footer />
    </Fragment>
  );
}

export default Sobre_mi;
