export default function PokemonAbout({ id, height, weight, abilities, types }) {
  return (
    <>
      <h1 className={`font-bold text-${types[0]} lg:text-lg mb-1`}>
        Pokedex Data
      </h1>
      <table className='table-auto'>
        <tbody className='flex flex-col gap-1'>
          <tr className='flex gap-14'>
            <td className='font-semibold'>Height</td>
            <td className='text-gray-500'>{height}</td>
          </tr>
          <tr className='flex gap-12'>
            <td className='font-semibold'>Weight</td>
            <td className='text-gray-500'>{weight}</td>
          </tr>
          <tr className='flex gap-10'>
            <td className='font-semibold'>Abilities</td>
            <td className='text-gray-500'>
              {abilities.map((ability) => {
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
            <td className='font-semibold'>Types</td>
            <td className='flex gap-1 text-white'>
              {types.map((type, i) => (
                <div key={id + name + i} className={` max-w-[12em]`}>
                  <h2
                    className={`inline text-xs font-semibold bg-btn_${type} px-2 py-1 rounded-full text-center w-full capitalize`}>
                    {type}
                  </h2>
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
