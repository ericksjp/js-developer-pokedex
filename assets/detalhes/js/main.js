const pokemonCard = document.getElementById('container')

document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const pokemonNumber = urlParams.get('number');

  try {
    const pkr = await pokeApi.getPokeInfo(pokemonNumber);
    pokemonCard.innerHTML += pokemonToLi(pkr);
  } catch (error) {
    console.error(error);
  }
});