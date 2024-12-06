import React, { useState, useEffect } from "react";
import ".//estilos/info.css";
import foto1 from './foto1.jpg';
import foto2 from './foto2.jpg';
import foto3 from './foto3.jpg';
import foto4 from './foto4.jpg';
import foto5 from './foto5.jpg';

export default function Informacion() {
  return (
    <section className="quienes-somos">
        <div className="quienes-somos-content">
            <div className="texto">
                <h2>¿Quiénes somos?</h2>
                <p>
                    Fundado en mayo de 1956, el <strong>Internado Nueva Vida</strong> es un refugio que ha brindado hogar, educación y esperanza a generaciones de niños y niñas de la etnia Yuracaré, en el corazón del Amazonas boliviano.
                </p>
                <p>
                    Nuestro compromiso es con el bienestar y desarrollo integral de los niños provenientes de comunidades remotas, proporcionándoles un entorno seguro donde puedan crecer con dignidad y apoyo.
                </p>
                <p>
                    Más que un internado, somos <strong>Sibbe Taxletambëjbëshe</strong>, "La Casa del Saber", donde buscamos preservar y enseñar las tradiciones, el idioma y los valores culturales de los Yuracaré, fortaleciendo su identidad y creando oportunidades para un futuro mejor.
                </p>
            </div>
            <div className="imagenes">
                <img src={foto1} alt="Imagen del Internado 1" />
                <img src={foto2} alt="Imagen del Internado 2" />
                <img src={foto3} alt="Imagen del Internado 3" />
                <img src={foto4} alt="Imagen del Internado 4" />
                <img src={foto5} alt="Imagen del Internado 5" />

            </div>
        </div>
    </section>
);
};