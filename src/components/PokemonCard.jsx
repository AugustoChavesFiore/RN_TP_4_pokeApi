import { useEffect, useState, useContext } from 'react';
import { PokeContext } from '../contexts/PokeContext';

export const PokemonCard = ({ pokemon }) => {
    const pokeContext = useContext(PokeContext);
    const { handleDelete } = pokeContext;

    const [poke, setPoke] = useState({});

    useEffect(() => {
        fetch(pokemon.url)
            .then(res => res.json())
            .then(data => setPoke(data));
    }, [pokemon]);

    return (
        <section className="col-2 card border rounded-3 shadow" style={{ width: '18rem' }}>
            <img src={poke.sprites?.front_default} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{poke.name}</h5>
                    <button id={poke.name} onClick={handleDelete} className='btn btn-danger'>Delete</button>
                </div>
        </section>
    )
}