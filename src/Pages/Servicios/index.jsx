import { Fragment } from "react";
import Footer from "../../Components/Footer/Footer";
import Title from "../../Components/Title/Title";
import data from "../../helpers/dataService";
import CardService from "../../Components/CardServices/CardService";
import "./index.css";

function Servicios() {
  return (
    <Fragment>
      <Title />
        <div className="container-services">
          {
            data.map((card, index)=> 
              <CardService 
                image={card.image}
                title={card.title}
                description={card.description}
                list1={card.list1}
                list2={card.list2}
                list3={card.list3}
                key={index}
              />
              )
          }
        </div>
      <Footer />;
    </Fragment>
  );
}

export default Servicios;
