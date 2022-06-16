import { Fragment } from "react";
import Card from "../../Components/Card/Card.jsx";
import Titulo from "../../assets/Portafolios/Group_20.png";
import Footer from "../../Components/Footer/Footer";
import data from "../../helpers/dataPortafolio";
import "./index.css";

function Sobre_mi() {
  // console.log(data)
  return (
    <Fragment>
      <div className="PortafolioDiv">
        <section className="portafolioTitle">
          <img src={Titulo} alt="" />
        </section>

        <div className="CardContainer">
          {data.map((card) => (
            <Card
              icon={card.icon}
              Title={card.Title}
              Texto={card.Texto}
              img1={card.img1}
              img2={card.img2}
              img3={card.img3}
              img4={card.img4}
              min1={card.min1}
              min2={card.min2}
              min3={card.min3}
              min4={card.min4}
              id={card.id}
              Addon={true}
            />
          ))}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Sobre_mi;
