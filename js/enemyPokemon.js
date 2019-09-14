var randomEnemyPokemon = null

function enemyPokemon() {
  var enemyPokemon = ["charizard-fire", "arcane-fire", "flareon-fire", "vaporeon-water", "squirtle-water", "gyarados-water"]
  var randomEnemyPokemonName = enemyPokemon[Math.floor(Math.random()*enemyPokemon.length)];
  randomEnemyPokemon = new pokemon(randomEnemyPokemonName.split("-")[0], randomEnemyPokemonName.split("-")[1], 100 + Math.floor(20 * Math.random()), 1)
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



var pokemonAttackButton = document.getElementById("buttonAttack")
function buttonAttack(event) {
    temporaryPokemon.attack(randomEnemyPokemon)
    document.getElementById("enemy-hp").innerHTML = randomEnemyPokemon.hp + " hp"
}

var pokemonSpecialButton = document.getElementById("buttonSpecial")
function buttonSpecial(event) {
    temporaryPokemon.special(randomEnemyPokemon)
    document.getElementById("enemy-hp").innerHTML = randomEnemyPokemon.hp + " hp"
}

var pokemonHealButton = document.getElementById("buttonHeal")
function buttonHeal(event) {
    temporaryPokemon.heal()
    document.getElementById("hp").innerHTML = temporaryPokemon.hp + " hp"
}


pokemonAttackButton.addEventListener("click", buttonAttack)
pokemonSpecialButton.addEventListener("click", buttonSpecial)
pokemonHealButton.addEventListener("click", buttonHeal)
