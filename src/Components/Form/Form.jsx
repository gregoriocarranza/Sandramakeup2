import { Fragment } from "react";
import "./index.css";

function Form() {
  return (
    <Fragment>
      <section className="FormSection">
        <form
          method="POST"
          id="noteForm"
          className="FormUser"
          action="https://formsubmit.co/5920311cbb2e56660b69ce2895caef83" // Esto tenemos que cambiarlo por el mail de sandra, luego pondremos este codigo que nos mandaron
          // onSubmit={sendEmail}
        >
          {/* <input type="hidden" name="_cc" value="another@email.com" /> */}
          <label htmlFor="name">
            Nombre completo <span>*</span>
          </label>
          <input
            type="text"
            name="Nombre"
            id="name"
            placeholder="Ej.Lucia Diaz"
            required
          />
          <label htmlFor="subjet">
            Servicio <span>*</span>
          </label>
          <select name="_subject" id="subjet" required>
            <option value="-none-" defaultValue>
              Selecciona un servicio
            </option>
            <option value="Consulta sobre Taller de automaquillaje">
              Taller de automaquillaje
            </option>
            <option value="Consulta sobre Maquillaje social">
              Maquillaje social
            </option>
            <option value="Consulta sobre Carrera de maquillaje social inicial">
              Carrera de maquillaje social inicial
            </option>
            <option value="Consulta sobre Extensiones Pestañas">
              extensiones Pestañas
            </option>
            <option value="Consulta sobre Maquillaje Editorial">
              Maquillaje Editorial
            </option>
          </select>
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <input
            type="email"
            name="Mail"
            id="email"
            placeholder="Ej.Lucia@gmail.com"
            required
          />
          <label htmlFor="message">
            Mensaje <span>*</span>
          </label>
          <textarea
            name="Mensaje"
            cols="30"
            rows="10"
            id="message"
            placeholder="Minimo 12 caracteres"
          />
          <input type="hidden" name="_template" value="table" />
          {/* Aca tiene que ir el redireccionamiento para agradecer por el mail */}
          <input
            type="hidden"
            name="_next"
            value="https://sandramakeup.netlify.app/Thanks.html"
          />

          <input type="hidden" name="_captcha" value="false" />
          <button type="submit">Enviar</button>
        </form>
      </section>
    </Fragment>
  );
}

export default Form;
