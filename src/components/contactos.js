import React, { useState } from "react";
import ".//estilos/conv.css";


export default function Convenios() {


    return (
        <footer className="contactanos">
          <h2>Contáctanos</h2>
          <p>
            Si deseas apoyar nuestra causa o conocer más sobre cómo puedes ayudar, no dudes en comunicarte con nosotros:
          </p>
          <div className="contact-info">
            <p>
              <strong>Teléfono:</strong> <a href="tel:+591700123456">+591 700123456</a>
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:info@nuevavida.org">info@nuevavida.org</a>
            </p>
          </div>
          <p className="mensaje">
            ¡Juntos podemos construir un futuro lleno de esperanza para los niños Yuracaré!
          </p>
        </footer>
      );
}
