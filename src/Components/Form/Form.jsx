import "./index.css";

import { Fragment } from "react";

function Form() {
  return (
    <Fragment>
      <section className="FormSection">
        <form
          method="POST"
          id="noteForm"
          className="FormUser"
          action="https://formsubmit.co/50d18cd96426f595f83b3562a5f37959" //Esto tenemos que cambiarlo por el mail de sandra, luego pondremos este codigo que nos mandaron
          // onSubmit={sendEmail}
        >
          {/* <input type="hidden" name="_cc" value="another@email.com" /> */}
          <label htmlFor="name">Nombre completo *</label>
          <input
            type="text"
            name="Nombre"
            id="name"
            placeholder="Ej.Lucia Diaz"
            required
          />
          <label htmlFor="subjet">Servicio *</label>
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
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            name="Mail"
            id="email"
            placeholder="Ej.Lucia@gmail.com"
            required
          />
          <label htmlFor="message">Mensaje *</label>
          <textarea
            name="Mensaje"
            cols="30"
            rows="10"
            id="message"
            placeholder="Minimo 12 caracteres"
          />
          <input type="hidden" name="_template" value="table" />
          {/* Aca tiene que ir el redireccionamiento para agradecer por el mail */}
          <input type="hidden" name="_next" value="/" />

          <input type="hidden" name="_captcha" value="false" />
          <button type="submit">Send</button>
        </form>
      </section>
    </Fragment>
  );
}

export default Form;
