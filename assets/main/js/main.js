// fetch api -> vamos usar para fazer a requisição http

const pokemonOl = document.getElementById('pokemonList') // pegando a minha lista pelo id
const loadMoreButton = document.getElementById('loadMore')
const limit = 8
let offset = 0

const maxRecords = 151

function pokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}"}>
        <span  class="number">#${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
            ${pokemon.types.map((typeSlot) => `<li class="type ${typeSlot}">${typeSlot}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
        <a class="details-button" href="../../../detalhes.html?number=${pokemon.order}">Details</a>
    </li>
    `
}

function loadMoreItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonOl.innerHTML += pokemons.map(pokemonToLi).join('')
    })
}

loadMoreItens(offset, limit)


loadMoreButton.addEventListener('click', () => {
    offset += limit;

    const qtdRecordsWithNextPage = offset + limit

    if (qtdRecordsWithNextPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadMoreItens(offset,newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else 
        loadMoreItens(offset,limit)
})

// -> fetch retorna uma promisse 
// -> processamento assincrono (um processamento que não vai ser instantaneo)
// -> promisse é uma promessa dessa resposta, uma hora tu vai receber essa resposta se der tido certo
// -> then -> oque eu faço quando o fetch estiver processado
// -> response.json () -> tambem retorna uma promessa