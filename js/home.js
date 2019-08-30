var pokemon1 = null
var pokemon2 = null
var pokemon3 = null
var pokemons = [];
var type = null
var pokemon1Button = document.getElementById("pokemon1")
function buttonPokemon1(event) {
  document.getElementById("stats").setAttribute("style", "display: block")
  document.getElementById("pokemon2").src = ""
  document.getElementById("pokemon3").src = ""
  var temporaryPokemon = new pokemon(pokemon1, type, 100 + Math.floor(20 * Math.random()), 1)
  console.log(temporaryPokemon)
  document.getElementById("name").innerHTML = temporaryPokemon.name
  document.getElementById("type").innerHTML = temporaryPokemon.type
  document.getElementById("hp").innerHTML = temporaryPokemon.hp  + " hp"
  document.getElementById("level").innerHTML = "level " + temporaryPokemon.level
}

pokemon1Button.addEventListener("click", buttonPokemon1)

var button = document.getElementById("buttonFire");

button.addEventListener("click" , buttonFire)
function buttonFire(event) {
  pokemon1 = "charizard"
  pokemon2 = "arcane"
  pokemon3 = "flareon"
  type = "fire"
  injectPokemon([pokemon1, pokemon2, pokemon3])
}

var button2 = document.getElementById("buttonWater");
button2.addEventListener("click" , buttonWater)
function buttonWater(event) {
  pokemon1 = "vaporeon"
  pokemon2 = "squirtle"
  pokemon3 = "gyarados"
  type = "water"
  injectPokemon([pokemon1, pokemon2, pokemon3])
}

function injectPokemon(pokemons) {
  for(var i = 1; i < 4; i ++) {
    document.getElementById("pokemon" + i).src="assets/" + pokemons[i - 1] + ".gif"
  }
}
