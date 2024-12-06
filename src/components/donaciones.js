import React, { useState } from "react";
import "./estilos/donaciones.css";


export default function Donaciones() {
  const [dia, setDia] = useState('');
  const [lista, setLista] = useState([{ id: 1, valor: '' }]);

  // Manejar el cambio de día
  const handleDiaChange = (e) => {
      setDia(e.target.value);
  };

  // Manejar el cambio en las filas de la lista
  const handleListaChange = (id, value) => {
      const nuevaLista = lista.map((item) =>
          item.id === id ? { ...item, valor: value } : item
      );
      setLista(nuevaLista);
  };

  // Agregar una nueva fila
  const agregarFila = () => {
      const nuevaFila = { id: lista.length + 1, valor: '' };
      setLista([...lista, nuevaFila]);
  };

  // Eliminar una fila específica
  const eliminarFila = (id) => {
      const nuevaLista = lista.filter((item) => item.id !== id);
      setLista(nuevaLista);
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Día:', dia);
      console.log('Lista:', lista);
      alert('Formulario enviado. Revisa la consola para los datos.');
  };

  return (
      <form className="registro-form" onSubmit={handleSubmit}>
        <br/>
        <br/>
        <br/>

          <div className="form-group">
              <label htmlFor="dia">Día:</label>
              <input
                  type="text"
                  id="dia"
                  value={dia}
                  onChange={handleDiaChange}
                  placeholder="Escribe el día"
              />
          </div>
          <div className="lista-group">
              <label>Lista:</label>
              {lista.map((item) => (
                  <div key={item.id} className="lista-item">
                      <input
                          type="text"
                          value={item.valor}
                          onChange={(e) => handleListaChange(item.id, e.target.value)}
                          placeholder={`Elemento ${item.id}`}
                      />
                      <button
                          type="button"
                          onClick={() => eliminarFila(item.id)}
                          className="btn eliminar-btn"
                      >
                          Eliminar
                      </button>
                  </div>
              ))}
              <button type="button" onClick={agregarFila} className="btn agregar-btn">
                  Agregar fila
              </button>
          </div>
          <button type="submit" className="btn enviar-btn">
              Enviar
          </button>
      </form>
  );
};