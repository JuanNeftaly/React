import React, { useState, useEffect } from "react";

// llamando a axios
import axios from "axios";

const Pokemons = () => {
    // variable para guardar pokemons
    const [pokemones, setPokemons] = useState([]);

    // variables para funcion de botones
    const [anterior, setAnterior] = useState(null);
    const [siguiente, setSiguiente] = useState(null);
    const [actual, setActual] = useState(
        "https://pokeapi.co/api/v2/pokemon?offset=10&limit=10&offset=0"
    );

    // llamado a la API
    useEffect(() => {
        // creando funcion asincrona
        async function getPokemons() {
            try {
                const response = await axios.get(actual);

                // Axios devuelve los datos en la propiedad 'data'
                const data = response.data;
                setPokemons(data.results);

                // dandole funcion a anterior - siguiente
                setAnterior(data.previous);
                setSiguiente(data.next);
            } catch (error) {
                // Manejo de errores en caso de que falle la petición
                console.error("Hubo un error al obtener los pokemones", error);
            }
        }

        getPokemons();
    }, [actual]);

    return (
        <div>
            <ol>
                {
                    // mapear resultados
                    pokemones.map((pokemon, index) => {
                        return <li key={index}> {pokemon.name} </li>;
                    })
                }
            </ol>

            <button onClick={() => anterior !== null && setActual(anterior)}>
                Anterior
            </button>
            <button onClick={() => siguiente !== null && setActual(siguiente)}>
                Siguiente
            </button>
        </div>
    );
};

export default Pokemons;