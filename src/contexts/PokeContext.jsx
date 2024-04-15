import React, { createContext, useState, useEffect } from 'react';

export const PokeContext = createContext();

export const PokeProvider = ({ children }) => {

    const [pokemons, setPokemons] = useState([]);
    const [poke, setPoke] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(res => res.json())
            .then(data => setPokemons(data.results));
    };

    const handleDelete = (e) => {
        const name = e.target.id;
        setPokemons(pokemons.filter(pokemon => pokemon.name !== name));
    };


    return (
        <PokeContext.Provider value={{ handleSubmit, pokemons, setPokemons, poke, setPoke, handleDelete }}>
            {children}
        </PokeContext.Provider>
    )
}