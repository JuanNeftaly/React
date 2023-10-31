import React, { useState, useEffect } from "react";

// llamando a axios
import axios from "axios";

const Pokemons = () => {
    // variable para guardar pokemons
    const [pokemones, setPokemons] = useState([]);

    // llamado a la API
    useEffect(() => {

        // creando funcion asincrona
        async function getPokemons() {

            try {
                const response = await axios.get(
                    "https://pokeapi.co/api/v2/pokemon?offset=10&limit=10"
                );
                // Axios devuelve los datos en la propiedad 'data'
                const data = response.data;
                setPokemons(data.results);
            } catch (error) {
                // Manejo de errores en caso de que falle la petición
                console.error("Hubo un error al obtener los pokemones", error);
            }
        }

        getPokemons();
    }, []);

    return (
        <ul>
            {
                // mapear resultados
                pokemones.map((pokemon, index) => {
                    return <li key={index}> {pokemon.name} </li>;
                })
            }
        </ul>
    );
};

export default Pokemons;
