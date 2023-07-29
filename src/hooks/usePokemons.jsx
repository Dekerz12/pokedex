import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { formatPokemonData } from '../utils/pokemon-helper';
export default function usePokemons(generation) {
  const { data, isLoading, isInitialLoading } = useQuery({
    queryKey: ['pokemons', generation],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/generation/${generation}`
      );
      const pokemonList = data?.pokemon_species;
      const pokemons = await Promise.all(
        pokemonList?.map(async ({ url }) => {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${url.slice(42).slice(0, -1)}`
          );
          const data = await res.json();

          return formatPokemonData(data);
        })
      );
      return pokemons;
    },
  });

  return { data, isLoading, isInitialLoading };
}
