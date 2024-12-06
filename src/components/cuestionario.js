import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './estilos/cuestionario.css';

const Cuestionario = () => {
  const [respuestas, setRespuestas] = useState({});
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [error, setError] = useState(false);

  const preguntas = [
    "¿Qué tipo de combustible utiliza tu vehículo?",
    "¿Cuántos kilómetros recorre tu automóvil con un litro de combustible?",
    "¿Cuántos kilómetros sueles recorrer en un día promedio?",
    "¿Con qué frecuencia utilizas tu automóvil?",
    "¿Sabías cuántos kilogramos de dióxido de carbono se producen por cada litro de combustible?",
    "¿Cuántos litros de combustible consumes en un día promedio?",
    "¿Realizas mantenimiento regular para mejorar el rendimiento del combustible?",
    "¿Tu automóvil tiene funciones de eficiencia energética, como modo Eco?",
    "¿Usas alternativas como bicicleta o transporte público para reducir emisiones?",
    "¿Te gustaría contribuir plantando árboles para compensar tus emisiones de dióxido de carbono?"
  ];

  const opciones = [
    ["Gasolina", "Diésel", "Eléctrico", "Otro"],
    ["Menos de 8 km/l", "8-12 km/l", "Más de 12 km/l"],
    ["Menos de 10 km", "10-30 km", "Más de 30 km"],
    ["Diariamente", "Entre semana", "Ocasionalmente"],
    ["Menos de 2.5 kg de dióxido de carbono", "2.5-3.5 kg de dióxido de carbono", "Más de 3.5 kg de dióxido de carbono"],
    ["Menos de 5 litros", "5-15 litros", "Más de 15 litros"],
    ["Sí", "No", "A veces"],
    ["Sí", "No", "No estoy seguro"],
    ["Sí, frecuentemente", "Ocasionalmente", "Nunca"],
    ["Sí, me encantaría", "Quizás en el futuro", "No"]
  ];

  const manejarSiguiente = () => {
    if (!respuestas[preguntaActual]) {
      setError(true);
    } else {
      setError(false);
      setPreguntaActual((prev) => prev + 1);
    }
  };

  const manejarAtras = () => {
    setError(false);
    setPreguntaActual((prev) => prev - 1);
  };

  const manejarRespuesta = (opcion) => {
    setRespuestas({ ...respuestas, [preguntaActual]: opcion });
    setError(false);
  };

  const calcularEmisiones = () => {
    const diasConducidosAlAno = 365;
    const distanciaDiaria = respuestas[2] === "Menos de 10 km" ? 10 : respuestas[2] === "10-30 km" ? 30 : 50;
    const eficiencia = respuestas[1] === "Menos de 8 km/l" ? 8 : respuestas[1] === "8-12 km/l" ? 12 : 15;
    const emisionesPorLitro = respuestas[4] === "Menos de 2.5 kg de dióxido de carbono" ? 2.5 : respuestas[4] === "2.5-3.5 kg de dióxido de carbono" ? 3.5 : 5;
    const consumo = respuestas[5] === "Menos de 5 litros" ? 5 : respuestas[5] === "5-15 litros" ? 15 : 20;

    const emisionesDiarias = (distanciaDiaria / eficiencia) * emisionesPorLitro;
    const emisionesAnuales = emisionesDiarias * diasConducidosAlAno * consumo;

    return {
      emisionesDiarias: emisionesDiarias.toFixed(2),
      emisionesAnuales: emisionesAnuales.toFixed(2)
    };
  };

  const mostrarResultados = () => {
    const { emisionesDiarias, emisionesAnuales } = calcularEmisiones();
    return (
      <div className="cues-resultados">
        <h3>Resultados</h3>
        <p>Emisiones diarias: {emisionesDiarias} kilogramos de dióxido de carbono</p>
        <p>Emisiones anuales: {emisionesAnuales} kilogramos de dióxido de carbono</p>
        <p>
          Cada acción cuenta. Considera utilizar alternativas de transporte más
          sostenibles y contribuir plantando árboles para reducir las emisiones
          de dióxido de carbono.
        </p>
        <p>¡Juntos podemos cuidar el planeta y crear un futuro más verde!</p>
        <Link to="/" className="cues-boton">Volver al inicio</Link>
        <Link to="/donaciones" className="cues-botonn">apoya</Link>

      </div>
    );
  };

  return (
    <div className="bodyy">
    <div className="cues-cuestionario">
      <h1>Cuestionario de Emisiones</h1>
      {preguntaActual < preguntas.length ? (
        <div className="cues-pregunta">
          <h3>{preguntas[preguntaActual]}</h3>
          <div className="cues-opciones">
            {opciones[preguntaActual].map((opcion, index) => (
              <button
                key={index}
                onClick={() => manejarRespuesta(opcion)}
                className={`cues-boton-opcion ${respuestas[preguntaActual] === opcion ? "cues-seleccionado" : ""}`}
              >
                {opcion}
              </button>
            ))}
          </div>
          {error && <p className="cues-error">Por favor, selecciona una opción para continuar.</p>}
          <div className="cues-controles">
            <button onClick={manejarAtras} disabled={preguntaActual === 0} className="cues-boton">
              Atrás
            </button>
            <button onClick={manejarSiguiente} className="cues-boton">
              Siguiente
            </button>
          </div>
        </div>
      ) : (
        mostrarResultados()
      )}
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    </div>
  );
};

export default Cuestionario;
