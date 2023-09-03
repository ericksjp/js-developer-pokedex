// URL da API que você deseja consultar

const pokeApi = {}

function detailToPoke (data) {
  const pkr = new Pokemon();
  pkr.order = data.id;
  pkr.name = data.name;
  pkr.type = data.types[0].type.name;
  pkr.photo = data.sprites.other.dream_world.front_default;
  pkr.types = data.types.map((typeSlot) => typeSlot.type.name);
  pkr.height = data.height;
  pkr.weight = data.weight;
  data.stats.forEach((element) => (pkr.stats[element.stat.name] = element.base_stat));
  pkr.skills = data.abilities.map((element) => element.ability.name);
  return pkr;
}


pokeApi.getPokeInfo = async (number) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${number}/`;
  try {
    const response = await fetch(url);
    const pokeDetails = await response.json();
    const pokemon = detailToPoke(pokeDetails);
    return pokemon;
  }
  catch (error) {
    return console.error(error)
  }
}
