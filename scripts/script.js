function fetchPokemon() {
  let pokemon = $(".pokemon").val();
  let request = new XMLHttpRequest();
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  request.open("GET", url);

  request.onload = function () {
    if (this.response == "Not Found") {
      $('#res').text(`Search result for: ${pokemon}`);
      $('#pokeID').text(`Pokémon was not found. Please check your name and try again.`);
    } else {
      let data = JSON.parse(this.response);
      if (request.status >= 200 && request.status < 400) {
        let frontImg = data.sprites.front_default;
        let pokeId = data.id;
        let pokemonType = data.types.map(type => type.type.name).join(", "); // Extracting and joining Pokémon types

        $('#res').text(`SEARCH RESULT FOR --> ${pokemon}`);
        $('#pokeId').text(`POKÉMON ID # --> ${pokeId}`);
        $('#front').attr('src', frontImg);
        

        // Displaying stats
        $('#update_type').text(`${pokemonType}`);
        $('#update_weight').text(` ${data.weight}kg`);
        $('#update_height').text(`0.${data.height}m`);
        $('#update_hp').text(`${Math.floor((Math.random() * data.stats[0].base_stat) + 1)}/${data.stats[0].base_stat}`);
        $('#update_cp').text(`${data.base_experience}`);
      }
    }
  };
  request.send();
}

function updatePokemonStats(data) {
  // Update UI with Pokémon stats
  $('#update_img').attr('src', data.sprites.other.dream_world.front_default);
  $('#update_name').text(data.name);
  $('#update_hp').text(`${Math.floor((Math.random() * data.stats[0].base_stat) + 1)}/${data.stats[0].base_stat}`);
  $('#update_cp').text(`${data.base_experience}`);
  $('#update_type').text(`${data.types[0].type.name} / ${data.types[1] ? data.types[1].type.name : ''}`);
  $('#update_weight').text(`${data.weight / 10}kg`); // Convert to kilograms
  $('#update_height').text(`${data.height / 10}m`); // Convert to meters

  // Hide error message if it was shown previously
  $('#show_error').removeClass('show').addClass('hidden');
}
