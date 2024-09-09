function searchPokemon(event) {
  event.preventDefault();

  const searchApi = document.getElementById("search").value.trim().toLowerCase();
  fetch(`https://pokeapi.co/api/v2/pokemon/${searchApi}`)
    .then((response) => response.json())
    .then((data) => {
      const name = data.name; // Extracting the name
      const abilities = data.abilities.map((ability) => ability.ability.name).join(", ");
      const types = data.types.map((type) => type.type.name).join(", ");
      const stats = data.stats.map((stat) => `${stat.stat.name}: ${stat.base_stat}`).join(", ");
      const image = data.sprites.front_default;

      // Store all the information including the name in localStorage
      localStorage.setItem("pokemonData", JSON.stringify({ name, abilities, types, stats, image }));

      // Redirect to the results page
      window.location.href = "../details/details.html";
    })
    .catch((error) => console.error("Error Fetching Data:", error));
}
  