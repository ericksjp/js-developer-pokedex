const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.name = pokeDetail.name
    pokemon.order = pokeDetail.id;
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;
    pokemon.type = pokeDetail.types[0].type.name
    pokemon.types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    return pokemon
}

pokeApi.getPokemonDetail = async (pokemon) => {
    const response = await fetch(pokemon.url);
    const pokemonDetail =  await response.json();
    return convertPokeApiDetailToPokemon(pokemonDetail)
}

pokeApi.getPokemons = (async (offset = 0, limit = 20) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    try {
        const response = await fetch(url)
        const jsonbody = await response.json()
        const pokemons = jsonbody.results
        const detailRequests = pokemons.map(pokeApi.getPokemonDetail)
        const pokemonDetails = await Promise.all(detailRequests)
        return pokemonDetails
    } catch (error) {
        return console.error(error)
    }
})
