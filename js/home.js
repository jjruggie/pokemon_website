var pokemon1 = null
var pokemon2 = null
var pokemon3 = null
var pokemons = [];

var pokemon1Button = document.getElementById("pokemon1")
function buttonPokemon1(event) {
  console.log(pokemon)
}

pokemon1Button.addEventListener("click", buttonPokemon1)

var button = document.getElementById("buttonFire");

button.addEventListener("click" , buttonFire)
function buttonFire(event) {
  pokemon1 = "charizard"
  pokemon2 = "arcane"
  pokemon3 = "flareon"
  injectPokemon([pokemon1, pokemon2, pokemon3])
}

var button2 = document.getElementById("buttonWater");
button2.addEventListener("click" , buttonWater)
function buttonWater(event) {
  pokemon1 = "vaporeon"
  pokemon2 = "squirtle"
  pokemon3 = "gyarados"
  injectPokemon([pokemon1, pokemon2, pokemon3])
}

function injectPokemon(pokemons) {
  for(var i = 1; i < 4; i ++) {
    document.getElementById("pokemon" + i).src="assets/" + pokemons[i - 1] + ".gif"
  }
}
