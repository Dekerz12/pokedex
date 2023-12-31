import Loader from "../Loader";

export default function PokemonEvolution({ evolution }) {
  const { data, isLoading, isInitialLoading } = evolution;

  if (isInitialLoading || isLoading) {
    return (
      <div className="relative">
        <Loader size={120} />
      </div>
    );
  }

  return (
    <div
      className={`grid ${
        data?.length > 3 ||
        data[0]?.length === 2 ||
        data[1]?.length === 2 ||
        (data?.length === 2 && !Array.isArray(data[0]))
          ? `grid-cols-2`
          : `grid-cols-3`
      } w-full place-items-center gap-y-12`}
    >
      {data?.length === 0 ? (
        <h1 className="font-bold mt-16 col-span-3">
          This pokemon does not evolve
        </h1>
      ) : Array.isArray(data[0]) ? (
        data
          ?.filter((pokemon, i) => {
            if (pokemon.length === 3) {
              return pokemon.some((poke) => poke.name === evolution.name);
            } else if (
              evolution.name === "eevee" ||
              (data.length === 2 &&
                pokemon.some((poke) => poke.name === evolution.name))
            ) {
              return true;
            } else {
              return pokemon[1].name === evolution.name;
            }
          })
          ?.map((evolution) => {
            return evolution.map(({ name, image }) => {
              return (
                <div key={name + crypto.randomUUID()}>
                  <img
                    className="block w-36 aspect-square"
                    src={image}
                    alt=""
                  />
                  <h1 className="font-bold capitalize text-center">{name}</h1>
                </div>
              );
            });
          })
      ) : (
        data?.map(({ name, image }) => {
          return (
            <div key={name + crypto.randomUUID()}>
              <img className="block w-36 aspect-square" src={image} alt="" />
              <h1 className="font-bold capitalize text-center">{name}</h1>
            </div>
          );
        })
      )}
    </div>
  );
}
