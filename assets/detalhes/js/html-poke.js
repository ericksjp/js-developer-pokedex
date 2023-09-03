function pageColours(type) {
  switch (type) {
    case 'water':
      return "#6890f0";
    case 'fire':
      return "#f05030";
    case 'grass':
      return "#78c850";
    case 'electric':
      return "#f8d030";
    case 'psychic':
      return "#f85888";
    case 'ice':
      return "#98d8d8";
    case 'dragon':
      return "#7038f8";
    case 'dark':
      return "#705848";
    case 'normal':
      return "#a8a878";
    case 'fighting':
      return "#903028";
    case 'flying':
      return "#a890f0";
    case 'poison':
      return "#a040a0";
    case 'ground':
      return "#e0c068";
    case 'rock':
      return "#b8a038";
    case 'bug':
      return "#a8b820";
    case 'ghost':
      return "#705898";
    case 'steel':
      return "#b8b8d0";
    case 'fairy':
      return "rgba(255, 255, 255, 0.6)";
    default:
      return "#68a090"; // Cor padrão para tipos desconhecidos
  }
}

function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function pokemonToLi (pokemon) {
    return `
    <a href="./index.html" id="home-button" style="border: 2px solid ${pageColours(pokemon.type)}">Home</a>
    <div id="card" style="border: 2px solid ${pageColours(pokemon.type)}">
        <span class="number">${pokemon.order}</span>
        <div class="up-stats">
          <p class="hp" style="border:2px solid ${pageColours(pokemon.type)}">
            <span>HEIGHT</span>
            ${pokemon.height}
          </p>
          <p class="hp" style="border:2px solid ${pageColours(pokemon.type)}">
            <span>WEIGHT</span>
            ${pokemon.weight}
          </p>
        </div>
        <img src="${pokemon.photo}" style="background-color: ${pageColours(pokemon.type)}" />
        <h2 class="poke-name">${capitalize(pokemon.name)}</h2>
        <div class="types" style="border:2px solid ${pageColours(pokemon.type)}">
          <h4>Types</h4>
          <ol class="types-ol">
          ${pokemon.types.map((typeSlot) => `<li class="type-li ${typeSlot}">${capitalize(typeSlot)}</li>`).join('')}
          </ol>
        </div>
        <div class="hpt" style="border:2px solid ${pageColours(pokemon.type)}">
          <h4>Skills</h4>
          <ol class="hpt-ol">
          ${pokemon.skills.map((typeSlot) => `<li class="htp-li">${capitalize(typeSlot)}</li>`).join('')}
          </ol>
        </div>
        <div class="stats">
        ${Object.entries(pokemon.stats)
            .map(([statName, statValue]) => {
                let color = "";
                if (statValue >= 100){
                  color = "#6890f0"
                }
                else if (statValue >= 80) {
                    color = "#78c850";
                } else if (statValue >= 50) {
                    color = "#f8d030";
                } else {
                    color = "#f05030";
                }

                return `
            <div class="poke-stats" style="background-image: linear-gradient(to right, ${color} ${statValue}%, transparent ${statValue + 1}%);">
              <h3>${statValue}</h3>
              <p>${statName.toUpperCase()}</p>
            </div>
          `})
            .join("")}
        </div>
      </div>
    `;
}