// importando Hooks
import React, { useEffect, useState } from "react";

const Contador = () => {
  // contador valor actual
  // setContador la funcion para actualizar valor
  const [contador, setContador] = useState(0);

  // aplicando useEffect
  useEffect(() => {
    // todo lo que se ejecuta
    console.log("useEffect");
  });

  // useEffect de control en base a una variable de estado
  useEffect(() => {
    // todo lo que se ejecuta
    console.log("contador: ", { contador });
  }, [contador]);

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

// importante exportar
export default Contador;
