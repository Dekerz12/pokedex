import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { formatEvolution } from '../utils/pokemon-helper';
export default function useEvolution(species) {
  const pokemonSpeciesUrl = species?.url;
  const { data, isLoading, isInitialLoading, refetch } = useQuery({
    queryKey: ['pokemons', species],
    queryFn: async () => {
      const { data } = await axios.get(pokemonSpeciesUrl);
      const evolutionUrl = data?.evolution_chain?.url;
      const { data: evolutions } = await axios.get(evolutionUrl);
      return formatEvolution(evolutions.chain);
    },
    enabled: false,
  });

  return { data, isLoading, isInitialLoading, refetch };
}
