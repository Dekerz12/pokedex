import { usePokemonContext } from '../context/PokemonContext';

export default function PokemonCard({ pokemon }) {
  const { id, paddedId, name, types, imgSrc, species } = pokemon;
  const { openModal } = usePokemonContext();

  return (
    <>
      <div
        className={`p-4 text-white bg-${types[0]} bg-opacity-80 flex rounded-2xl gap-4 md:gap-12 items-center justify-center shadow-sm h-52 relative transform hover:scale-105 transition ease-out duration-300`}
        onClick={() => {
          openModal(pokemon);
        }}>
        <div className='flex flex-col gap-4 self-center'>
          <h1 className='text-xl font-bold capitalize'>{name}</h1>
          <div className='flex flex-col gap-4 '>
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
        <div className='z-20'>
          <img
            className='block max-w-[10rem] mx-auto aspect-square'
            src={imgSrc}
            alt=''
          />
        </div>
        <div className='absolute right-2 top-1 flex flex-col justify-between'>
          <h1 className='text-xl text-white text-opacity-50 '>{paddedId}</h1>
        </div>
        <div className='absolute w-full -top-2'>
          <div className=''>
            <img
              className='absolute w-56 text-water opacity-20 left-12 -z-20'
              src='https://www.shareicon.net/data/512x512/2016/10/18/844160_game_512x512.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  );
}
