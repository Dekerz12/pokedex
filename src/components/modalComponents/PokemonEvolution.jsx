import useEvolution from '../../hooks/useEvolutions';
import Loader from '../Loader';

export default function PokemonEvolution({ evolution }) {
  const { data, isLoading, isInitialLoading } = useEvolution(evolution);

  if (isInitialLoading || isLoading) {
    return (
      <div className='relative'>
        <Loader size={48} />
      </div>
    );
  }
  return (
    <div
      className={`grid ${
        data?.length > 2
          ? 'grid-cols-3'
          : data?.length === 2
          ? 'grid-cols-2'
          : 'grid-cols-1'
      } w-full place-items-center gap-y-12`}>
      {data?.length === 0 ? (
        <h1 className='font-bold mt-16'>This pokemon does not evolve</h1>
      ) : (
        data?.map(({ name, image }) => {
          return (
            <div key={name}>
              <img className='block w-36 aspect-square' src={image} alt='' />
              <h1 className='font-bold capitalize text-center'>{name}</h1>
            </div>
          );
        })
      )}
    </div>
  );
}
