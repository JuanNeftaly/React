import React, { useState } from "react";

// arrow function
const List = () => {
  // variables de estado
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  return (
    <div>
      <p>Ingresa un nombre</p>
      <input type="text" value={name} onChange={() => {}} />
      <button>Enviar</button>
    </div>
  );
};

export default List;
