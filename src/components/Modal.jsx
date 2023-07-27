import { usePokemonContext } from '../context/PokemonContext';
export default function Modal() {
  const { isModalOpen, closeModal, currentPokemon } = usePokemonContext();
  const { id, paddedId, name, types, imgSrc, height, weight, abilities } =
    currentPokemon;
  if (isModalOpen)
    return (
      <div
        onClick={closeModal}
        className='font-body text-white fixed inset-0 bg-black bg-opacity-80 backdrop:blur-sm flex items-center justify-center'>
        <div
          className={`bg-${types[0]} px-4 rounded-xl max-w-3xl w-full h-[30em] md:h-[35em] lg:h-[40em] mx-4 relative`}
          onClick={(e) => {
            e.stopPropagation();
          }}>
          <div className='flex items-center justify-center gap-4 mt-16 md:mt-12 lg:mt-16'>
            <div>
              <img
                className='block max-w-[8rem] md:max-w-[12rem] lg:max-w-[13rem] mx-auto aspect-square'
                src={imgSrc}
                alt={name}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <small className='text-base md:text-lg font-semibold'>
                {paddedId}
              </small>
              <h1 className='capitalize text-2xl md:text-4xl font-bold'>
                {name}
              </h1>
              <div className='flex '>
                {types.map((type, i) => (
                  <div key={id + name + i} className={` max-w-[12em]`}>
                    <h2
                      className={`inline text-sm font-semibold bg-${type} px-4 py-2 rounded-full text-center w-full capitalize`}>
                      {type}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='w-full bg-white absolute bottom-0 left-0 text-gray-700 rounded-xl p-5 lg:p-8 '>
            <h1 className={`font-semibold text-${types[0]} lg:text-lg mb-2`}>
              Pokedex Data
            </h1>
            <table className='table-auto lg:text-lg'>
              <tbody className='flex flex-col gap-2'>
                <tr className='flex gap-14'>
                  <td>Height</td>
                  <td className='text-gray-500'>{height}</td>
                </tr>
                <tr className='flex gap-12'>
                  <td>Weight</td>
                  <td className='text-gray-500'>{weight}</td>
                </tr>
                <tr className='flex gap-10'>
                  <td>Abilities</td>
                  <td className='text-gray-500'>
                    {abilities.map((ability, i) => {
                      if (ability.isHidden) {
                        return (
                          <h1 key={ability.name} className='text-xs'>
                            {ability.name} <span>{'(hidden ability)'}</span>
                          </h1>
                        );
                      } else {
                        return <h1 key={ability.name}>{ability.name}</h1>;
                      }
                    })}
                  </td>
                </tr>
                <tr className='flex gap-14'>
                  <td>Types</td>
                  <td className='flex gap-1 text-white'>
                    {types.map((type, i) => (
                      <div key={id + name + i} className={` max-w-[12em]`}>
                        <h2
                          className={`inline text-xs font-semibold bg-${type} px-2 py-1 rounded-full text-center w-full capitalize`}>
                          {type}
                        </h2>
                      </div>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}
