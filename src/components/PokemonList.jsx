import usePokemons from '../hooks/usePokemons';
import PokemonCard from './PokemonCard';
export default function PokemonList({ generation }) {
  const pokemons = usePokemons(generation);

  return (
    <div className='max-w-screen-xl mx-auto grid gap-3 px-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:px-20 lg:grid-cols-3 lg:gap-6 lg:mt-8'>
      {pokemons
        ?.sort((a, b) => a.id - b.id)
        ?.map((pokemon) => {
          return <PokemonCard key={crypto.randomUUID()} pokemon={pokemon} />;
        })}
    </div>
  );
}
