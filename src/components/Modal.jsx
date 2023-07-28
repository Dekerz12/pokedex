import { useState } from 'react';
import { usePokemonContext } from '../context/PokemonContext';
import PokemonAbout from './modalComponents/PokemonAbout';
import { formatStats } from '../utils/pokemon-helper';
import PokemonStats from './modalComponents/PokemonStats';

export default function Modal() {
  const { isModalOpen, closeModal, currentPokemon } = usePokemonContext();
  const [active, setActive] = useState('about');
  const {
    id,
    paddedId,
    name,
    types,
    imgSrc,
    height,
    weight,
    abilities,
    stats,
  } = currentPokemon;

  if (isModalOpen)
    return (
      <div
        onClick={() => {
          closeModal();
          setActive('about');
        }}
        className='font-body text-white fixed inset-0 bg-black bg-opacity-80 backdrop:blur-sm flex items-center justify-center'>
        <div
          className={`relative bg-${types[0]} px-4 rounded-xl max-w-3xl w-full h-[30em] md:h-[34em] lg:h-[40em] mx-4 relative flex flex-col`}
          onClick={(e) => {
            e.stopPropagation();
          }}>
          <div className='flex items-center justify-center gap-12 mt-14 md:-mt-3 lg:mt-14'>
            <div>
              <img
                className='block max-w-[8rem] md:max-w-[12rem] lg:max-w-[13rem] mx-auto aspect-square'
                src={imgSrc}
                alt={name}
              />
            </div>
            <div className='flex flex-col gap-3'>
              <small className='text-base md:text-lg font-semibold'>
                {paddedId}
              </small>
              <h1 className='capitalize text-2xl md:text-4xl font-bold'>
                {name}
              </h1>
              <div className='flex gap-1 '>
                {types.map((type, i) => (
                  <div key={id + name + i} className={` max-w-[12em]`}>
                    <h2
                      className={`inline text-sm font-semibold bg-btn_${type} px-4 py-2 rounded-full text-center w-full capitalize`}>
                      {type}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <nav className='absolute inset-x-0 top-2 bottom-8 md:top-8 md:bottom-6 flex justify-around mt-14 lg:mt-16'>
            <button
              className={`font-semibold md:text-lg cursor-pointer   ${
                active === 'about' ? 'opacity-100' : 'opacity-50'
              }`}
              onClick={() => {
                setActive('about');
              }}>
              About
            </button>
            <button
              className={`font-semibold md:text-lg cursor-pointer   ${
                active === 'stats' ? 'opacity-100' : 'opacity-50'
              }`}
              onClick={() => {
                setActive('stats');
              }}>
              Stats
            </button>
          </nav>
          <div className='w-full bg-white absolute bottom-0 left-0 text-gray-700 rounded-xl p-5 lg:p-8 overflow-scroll max-h-52 md:max-h-60 lg:max-h-64'>
            {active === 'about' ? (
              <PokemonAbout
                id
                height={height}
                weight={weight}
                abilities={abilities}
                types={types}
              />
            ) : (
              <PokemonStats stats={formatStats(stats)} types={types} />
            )}
          </div>
        </div>
      </div>
    );
}
