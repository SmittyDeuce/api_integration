const typeColors = {
  bug: "#A8B820",
  dark: "#705848",
  dragon: "#7038F8",
  electric: "#F8D030",
  fairy: "#EE99AC",
  fighting: "#C03028",
  fire: "#F08030",
  flying: "#A890F0",
  ghost: "#705898",
  grass: "#78C850",
  ground: "#E0C068",
  ice: "#98D8D8",
  normal: "#A8A77A",
  poison: "#A040A0",
  psychic: "#F85888",
  rock: "#B8A038",
  steel: "#B8B8D0",
  water: "#6890F0",
};

document.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(localStorage.getItem("pokemonData"));

  if (data) {
    document.getElementById("pokemon-name").textContent = `${data.name}`;
    document.getElementById("pokemon-image").src = data.image;
    document.getElementById(
      "pokemon-abilities"
    ).textContent = `Abilities: ${data.abilities}`;
    document.getElementById(
      "pokemon-types"
    ).textContent = `Types: ${data.types}`;
    document.getElementById(
      "pokemon-stats"
    ).textContent = `Stats: ${data.stats}`;
  } else {
    console.error("No Pokemon data found in local storage.");
  }
});

function backGround() {
  const data = JSON.parse(localStorage.getItem("pokemonData"));

  if (data) {
    const types = data.types.split(", ");
    const body = document.body;

    if (types.length === 1) {
      body.style.backgroundColor = typeColors[types[0]];
    } else if (types.length === 2) {
      body.style.background = `radial-gradient(circle, ${
        typeColors[types[0]]
      }, ${typeColors[types[1]]}`;
    }
  }
}
document.addEventListener("DOMContentLoaded", backGround);
