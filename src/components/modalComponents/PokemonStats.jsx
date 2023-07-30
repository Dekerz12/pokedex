import { formatStats } from '../../utils/pokemon-helper';
export default function PokemonStats({ stats, types }) {
  return (
    <>
      <h1 className={`font-bold text-${types[0]} lg:text-lg mb-2`}>
        Base Stats
      </h1>
      <table className='table-auto border-separate '>
        <tbody className=''>
          {stats.map((stat) => {
            return (
              <tr key={stat.name} className=''>
                <td className='font-semibold capitalize w-60 lg:h-10'>
                  {stat.name}
                </td>
                <td className='text-gray-500 w-12 '>{stat.value}</td>
                <td className=' w-60 '>
                  <div
                    className='bg-blue-500 h-2 rounded-md animate-slide'
                    style={{
                      width: `${(stat.value / stat.max) * 100}%`,
                    }}></div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
