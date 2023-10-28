// importando Hooks
import React, { useEffect, useState } from "react";

const Contador = () => {
  // contador valor actual
  // setContador la funcion para actualizar valor
  const [contador, setContador] = useState(0);

  // to do: crear un contador para cada useEffect para saber cuantas veces se clickeo cada uno
  const [contAdd, setContAdd] = useState(0);
  const [contDel, setContDel] = useState(0);

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

  // contando cuantas se aumenta y disminuye
  useEffect(() => {
    console.log("Aumento: ", { contAdd });
  }, [contAdd]);

  useEffect(() => {
    console.log("Disminuye: ", { contDel });
  }, [contDel]);

  return (
    <div>
      <h1> Haz clickeado {contador}</h1>
      <button
        onClick={() => {
          setContador(contador + 1);
          setContAdd(contAdd + 1);
        }}
      >
        Aumentar
      </button>

      <button
        onClick={() => {
          if (contador > 0) {
            setContador(contador - 1);
            setContDel(contDel + 1);
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
