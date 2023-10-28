// importando Hooks
import React, {useState} from "react";

const Contador = () => {
  // contador valor actual
  // setContador la funcion para actualizar valor
  const [contador, setContador] = useState(0);
  return (
    <div>
      <h1> Haz clickeado {contador}</h1>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        Dame Click :D
      </button>

      <button
        onClick={() => {
          if (contador > 0) {
            setContador(contador - 1);
          }
        }}
      >
        Disminuir
      </button>

      <button
        onClick={() => {
          setContador(0);
        }}
      >
        Reset :0
      </button>
    </div>
  );
};

export default Contador;
