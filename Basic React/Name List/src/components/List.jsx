import React, { useState } from "react";

// arrow function
const List = () => {
  // variables de estado
  const [name, setName] = useState("");
  // sirve para modificarse
  const [names, setNames] = useState([]);

  // funcion de guardar
  const save = () => {
    // guardar en arreglo
    setNames([...names, name]);
    setName("");
  };

  // cosas a retornar
  return (
    <div>
      <p>Ingresa un nombre</p>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={save}>Enviar</button>

      <ul>
        {names.map((elemento, index) => {
          return <li key={index}> {elemento}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;
