import { Fragment, useState } from "react";
import LI from "./LI_component";
import FooterLogo from "../../assets/Footer/footerlogo.png";
import "./index.css";

function Footer() {
  const [change, setChage] = useState(0);
  return (
    <Fragment>
      <footer>
        <section className="footerr">
          <div className="FAQ">
            <h2>Preguntas Frecuentes</h2>
            <ul>
              <LI
                className={change === 1 ? "Selected" : "notSelected"}
                text="¿Cuanto sale el servicio
              de maquillaje social?"
                funct={(e) => {
                  setChage(e);
                }}
                num={1}
                p="El servicio es personalizado se toman en cuenta la forma de tu rostro, ojos, el color de cabello, atuendo, accesorios, fototipo, biotipo y colorimetría. Luego de una pequeña entrevista se envía un documento PDF por whatsapp o por mail con los precios."
              />
              <LI
                className={change === 2 ? "Selected" : "notSelected"}
                text="¿Cuáles son los métodos
              de pago?"
                funct={(e) => {
                  setChage(e);
                }}
                num={2}
                p="Tenes todas las opciones, efectivo, mercadopago, en cuotas, transferencia o depósito bancario."
              />
              <LI
                className={change === 3 ? "Selected" : ""}
                text="¿Se dañan mis pestañas
              naturales si me pongo extensiones de pestañas?"
                funct={(e) => {
                  setChage(e);
                }}
                num={3}
                p="No, definitivamente no. Antes de empezar evaluo el grosor, largo y curvatura de tu pestaña natural y aplico la extensión adecuada. Uso productos de primera línea aprobados por Anmat."
              />
              <LI
                className={change === 4 ? "Selected" : ""}
                text="¿Cuántas horas me va a
              durar el maquillaje?"
                funct={(e) => {
                  setChage(e);
                }}
                num={4}
                p="Mas de 12 horas seguro! Mi maletín esta compuesto por productos de larga duración, importados y nacionales de uso profesional, hipoalergénicos y a prueba de agua. También realizo técnicas de sellado para que dure horas y horas así no tenes que preocuparte por el makeup."
              />
            </ul>
          </div>
          <div className="FooterLogo">
            <img src={FooterLogo} alt="logo" />
            <h3>@Sandratmua</h3>
          </div>
        </section>
      </footer>
    </Fragment>
  );
}

export default Footer;
