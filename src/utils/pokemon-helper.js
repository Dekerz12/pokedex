export const formatPokemonData = (pokemon) => {
  const { id, types, sprites, weight, height, abilities } = pokemon;
  const paddedId = '#' + id.toString().padStart(3, '0');
  const weightInKg = weight / 10 + 'kg';
  const heightInMeter = height / 10 + 'm';
  const formattedTypes = types?.map(({ type }) => type.name);
  const formattedAbilities = abilities.map(({ ability, is_hidden }) => ({
    name: ability.name,
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

  const formattedStats = stats.map(({ base_stat, stat }) => ({
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
