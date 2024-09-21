function searchPokemon(event) {
  // Prevent the default form submission behavior (page refresh)
  event.preventDefault();

  // Get the search input value, trim whitespace, and convert to lowercase
  const searchApi = document.getElementById("search").value.trim().toLowerCase();

  // Fetch data from the PokéAPI using the search input as part of the URL
  fetch(`https://pokeapi.co/api/v2/pokemon/${searchApi}`)
    .then((response) => response.json())  // Parse the response as JSON
    .then((data) => {
      // Extract useful data from the API response
      const name = data.name; // Pokemon's name
      const abilities = data.abilities.map((ability) => ability.ability.name).join(", "); // Abilities as a string
      const types = data.types.map((type) => type.type.name).join(", "); // Types as a string
      const stats = data.stats.map((stat) => `${stat.stat.name}: ${stat.base_stat}`).join(", "); // Stats as a string
      const image = data.sprites.front_default; // URL for the front sprite image

      // Store the extracted data in localStorage as a JSON string
      localStorage.setItem("pokemonData", JSON.stringify({ name, abilities, types, stats, image }));

      // Redirect the user to the results page where details will be displayed
      window.location.href = "../details/details.html";
    })
    .catch((error) => {
      // Log any errors that occur during the fetch request
      console.error("Error Fetching Data:", error);
    });
}
