import { useState } from 'react';
import Loader from '../Loader';

export default function PokemonEvolution({ evolution }) {
  const { data, isLoading, isInitialLoading } = evolution;
  let eeveeEvolutions = [];
  if (isInitialLoading || isLoading) {
    return (
      <div className='relative'>
        <Loader size={48} />
      </div>
    );
  }
  if (data[0].name === 'eevee') {
    eeveeEvolutions = data.map((pokemon, i) => {
      if (pokemon.name === 'eevee') {
        return data[i + 1];
      }
    });
  }
  eeveeEvolutions = eeveeEvolutions.filter((pokemon) => pokemon !== undefined);
  const eeveeEvolutionId = eeveeEvolutions.findIndex(
    (name) => name.name === evolution.name
  );
  console.log(eeveeEvolutions[eeveeEvolutionId]);
  return (
    <div
      className={`grid ${
        data[0].name === 'eevee' || data?.length === 2
          ? 'grid-cols-2'
          : data?.length > 2
          ? 'grid-cols-3'
          : 'grid-cols-1'
      } w-full place-items-center gap-y-12`}>
      {data?.length === 0 ? (
        <h1 className='font-bold mt-16'>This pokemon does not evolve</h1>
      ) : eeveeEvolutions.length && evolution.name !== 'eevee' ? (
        <>
          <div key={data[0].name + crypto.randomUUID()}>
            <img
              className='block w-36 aspect-square'
              src={data[0].image}
              alt=''
            />
            <h1 className='font-bold capitalize text-center'>{data[0].name}</h1>
          </div>
          <div
            key={eeveeEvolutions[eeveeEvolutionId].name + crypto.randomUUID()}>
            <img
              className='block w-36 aspect-square'
              src={eeveeEvolutions[eeveeEvolutionId].image}
              alt=''
            />
            <h1 className='font-bold capitalize text-center'>
              {eeveeEvolutions[eeveeEvolutionId].name}
            </h1>
          </div>
        </>
      ) : (
        data?.map(({ name, image }) => {
          return (
            <div key={name + crypto.randomUUID()}>
              <img className='block w-36 aspect-square' src={image} alt='' />
              <h1 className='font-bold capitalize text-center'>{name}</h1>
            </div>
          );
        })
      )}
    </div>
  );
}
