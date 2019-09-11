function enemyPokemon() {
  var enemyPokemon = ["charizard-fire", "arcane-fire", "flareon-fire", "vaporeon-water", "squirtle-water", "gyarados-water"]
  var randomEnemyPokemonName = enemyPokemon[Math.floor(Math.random()*enemyPokemon.length)];
  var randomEnemyPokemon = new pokemon(randomEnemyPokemonName.split("-")[0], randomEnemyPokemonName.split("-")[1], 100 + Math.floor(20 * Math.random()), 1)
  document.getElementById("enemy-image").src="assets/" + randomEnemyPokemon.name + ".gif"
  document.getElementById("enemy-name").innerHTML = randomEnemyPokemon.name
  document.getElementById("enemy-type").innerHTML = randomEnemyPokemon.type
  document.getElementById("enemy-hp").innerHTML = randomEnemyPokemon.hp + " hp"
  document.getElementById("enemy-level").innerHTML = "level " + randomEnemyPokemon.level
  console.log("FOOBAR")
  console.log(randomEnemyPokemon)
  // get all pokemons into an array
  // randomly select pokemon from array
  // create pokemon that was selected
  // use DOM to inject Picture and pokemon data into HTML
}
