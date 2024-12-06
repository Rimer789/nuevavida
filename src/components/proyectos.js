import React, { useState, useEffect} from "react";
import "./estilos/proyectos.css";
import foto1 from './foto1.jpg';
import foto2 from './foto2.jpg';
import foto3 from './foto3.jpg';
import foto4 from './foto4.jpg';
import foto5 from './foto5.jpg';

export default function Proyectos() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lista de imágenes importadas
  const images = [foto1, foto2, foto3, foto4, foto5];

  // Cambiar imagen automáticamente cada 3 segundos
  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, [images.length]);


  return (
      <section className="ayuda-donaciones">
          <h2>Ayuda y Donaciones</h2>
          <p>
              Tu apoyo puede marcar la diferencia en la vida de los niños y niñas del <strong>Internado Nueva Vida</strong>. Estas son las áreas donde más necesitamos ayuda:
          </p>
          <ul>
              <li>
                  <strong>Alimentos:</strong> Productos perecederos y no perecederos para garantizar una dieta balanceada.
              </li>
              <li>
                  <strong>Recursos financieros:</strong> Fondos para cubrir gastos operativos y mejorar las instalaciones.
              </li>
              <li>
                  <strong>Material educativo:</strong> Libros, cuadernos y recursos para fomentar la enseñanza del idioma y la cultura Yuracaré.
              </li>
              <li>
                  <strong>Voluntariado especializado:</strong> Psicólogos, educadores y terapeutas para apoyar a niños con necesidades especiales.
              </li>
          </ul>

          {/* Sección de fotos */}
          <section className="photo-gallery">
              <h3></h3>
              <div className="photo-container">
                  <img
                      src={images[currentImageIndex]}
                      alt={`Foto ${currentImageIndex + 1}`}
                      className="photo"
                  />
              </div>
          </section>
      </section>
  );
};