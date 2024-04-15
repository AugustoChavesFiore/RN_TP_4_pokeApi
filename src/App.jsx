import { PokemonCard } from './components/PokemonCard';
import { PokeContext } from './contexts/PokeContext';
import { useContext } from 'react';
function App() {
  const pokeContext = useContext(PokeContext)
  const { handleSubmit, pokemons } = pokeContext

  return (
    <div className='container'>
      <button className='btn btn-info' onClick={handleSubmit}>
        Cargar Pokemons
      </button>

      {
        pokemons.length > 0 ? (
          <div className='row justify-content-center'>
            {pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
          </div>
        ) : (
          <h1>No hay pokemons</h1>
        )
      }
    </div>
  );
}

export default App
