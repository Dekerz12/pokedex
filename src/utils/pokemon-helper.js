export const formatPokemonData = (pokemon) => {
  const { id, types, sprites, weight, height, abilities } = pokemon;
  const paddedId = "#" + id.toString().padStart(3, "0");
  const weightInKg = weight / 10 + "kg";
  const heightInMeter = height / 10 + "m";
  const formattedTypes = types?.map(({ type }) => type.name);
  const formattedAbilities = abilities.map(({ ability, is_hidden }) => ({
    name: removeHyphens(ability.name),
    isHidden: is_hidden,
  }));
  const imgUrl =
    sprites.other.dream_world.front_default ||
    sprites.other["official-artwork"].front_default;

  return {
    ...pokemon,
    paddedId,
    weight: weightInKg,
    height: heightInMeter,
    imgSrc: imgUrl,
    types: formattedTypes,
    abilities: formattedAbilities,
  };
};

export const formatStats = (stats) => {
  const statsMaxBaseValues = {
    hp: 255,
    attack: 181,
    defense: 250,
    "special-attack": 180,
    "special-defense": 250,
    speed: 200,
    total: 720,
  };

  const formattedStats = stats?.map(({ base_stat, stat }) => ({
    name: removeHyphens(stat.name),
    value: base_stat,
    max: statsMaxBaseValues[stat.name],
  }));

  const total = stats.reduce((total, { base_stat }) => total + base_stat, 0);
  return [
    ...formattedStats,
    { name: "total", value: total, max: statsMaxBaseValues["total"] },
  ];
};

const removeHyphens = (string) => {
  return string.replace(/-/g, " ");
};

export const formatEvolution = (evolution) => {
  if (!evolution.evolves_to.length) {
    return [];
  }
  const extractId = (url) => url.match(/\/(\d+)\//)[1];

  function normalizeEvolutionChain({ species, evolves_to }) {
    const obj = {
      name: species.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${extractId(
        species.url
      )}.png`,
    };
    if (evolves_to.length > 1) {
      return [
        obj,
        evolves_to.map(({ species, evolves_to }) => {
          if (evolves_to.length) {
            return [
              {
                name: species.name,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${extractId(
                  species.url
                )}.png`,
              },
              {
                name: evolves_to[0]?.species.name,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${extractId(
                  evolves_to[0]?.species.url
                )}.png`,
              },
            ];
          } else {
            return {
              name: species.name,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${extractId(
                species.url
              )}.png`,
            };
          }
        }),
      ];
    } else {
      return evolves_to.length
        ? [obj, ...normalizeEvolutionChain(evolves_to[0])]
        : [obj];
    }
  }

  const evolutionRepeat = normalizeEvolutionChain(evolution)
    .filter((evolution) => !Array.isArray(evolution))
    .map((evolution) => evolution);

  const index = normalizeEvolutionChain(evolution).findIndex((elem) =>
    Array.isArray(elem)
  );

  if (index !== -1) {
    return normalizeEvolutionChain(evolution)[index]?.map((evolution) =>
      !Array.isArray(evolution)
        ? [...evolutionRepeat, evolution]
        : Array.isArray(evolution)
        ? [evolutionRepeat, evolution.map((evo) => evo)].flat()
        : [...evolutionRepeat, evolution]
    );
  } else {
    return normalizeEvolutionChain(evolution).map((evolution) => evolution);
  }
};
