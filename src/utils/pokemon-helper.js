export const formatPokemonData = (pokemon) => {
  const { id, types, sprites, weight, height, abilities } = pokemon;
  const paddedId = '#' + id.toString().padStart(3, '0');
  const weightInKg = weight / 10 + 'kg';
  const heightInMeter = height / 10 + 'm';
  const formattedTypes = types?.map(({ type }) => type.name);
  const formattedAbilities = abilities.map(({ ability, is_hidden }) => ({
    name: removeHyphens(ability.name),
    isHidden: is_hidden,
  }));
  const imgUrl =
    sprites.other.dream_world.front_default ||
    sprites.other['official-artwork'].front_default;

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
    'special-attack': 180,
    'special-defense': 250,
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
    { name: 'total', value: total, max: statsMaxBaseValues['total'] },
  ];
};

const removeHyphens = (string) => {
  return string.replace(/-/g, ' ');
};

export const formatEvolution = (evolution) => {
  if (!evolution.evolves_to.length) {
    return [];
  }
  const extractId = (url) => url.match(/\/(\d+)\//)[1];
  const firstEvolution = {
    name: evolution.species.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${extractId(
      evolution.species.url
    )}.png`,
  };

  const normalizeEvolutionChain = (evolution) => {
    return evolution.reduce(
      (acc, nextPokemon) => {
        acc.push({
          name: nextPokemon.species.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${extractId(
            nextPokemon.species.url
          )}.png`,
        });
        if (nextPokemon.evolves_to.length) {
          return nextPokemon.evolves_to.reduce((acc2, finalPokemon) => {
            acc2 = {
              name: finalPokemon.species.name,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${extractId(
                finalPokemon.species.url
              )}.png`,
            };
            acc.push(acc2);

            return acc;
          }, {});
        }

        return acc;
      },
      [firstEvolution]
    );
  };

  const evolutionChain = normalizeEvolutionChain(evolution.evolves_to);
  return evolutionChain;
};
