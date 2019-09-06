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
  getStats(temporaryPokemon)
}

var pokemon2Button = document.getElementById("pokemon2")
function buttonPokemon2(event) {
  document.getElementById("stats").setAttribute("style", "display: block")
  document.getElementById("pokemon1").src = ""
  document.getElementById("pokemon3").src = ""
  var temporaryPokemon = new pokemon(pokemon2, type, 100 + Math.floor(20 * Math.random()), 1)
  getStats(temporaryPokemon)
}

var pokemon3Button = document.getElementById("pokemon3")
function buttonPokemon3(event) {
  document.getElementById("stats").setAttribute("style", "display: block")
  document.getElementById("pokemon1").src = ""
  document.getElementById("pokemon2").src = ""
  var temporaryPokemon = new pokemon(pokemon3, type, 100 + Math.floor(20 * Math.random()), 1)
  getStats(temporaryPokemon)
}

var pokemonSelect = document.getElementById("pokemonSelector")
function selectPokemon(event) {
  document.getElementsByTagName("body")[0].setAttribute("style", "background-image: url('assets/pokemon_battle_background.jpg')")
}


function getStats(temporaryPokemon) {
  document.getElementById("name").innerHTML = temporaryPokemon.name
  document.getElementById("type").innerHTML = temporaryPokemon.type
  document.getElementById("hp").innerHTML = temporaryPokemon.hp  + " hp"
  document.getElementById("level").innerHTML = "level " + temporaryPokemon.level

}

pokemon1Button.addEventListener("click", buttonPokemon1)
pokemon2Button.addEventListener("click", buttonPokemon2)
pokemon3Button.addEventListener("click", buttonPokemon3)
pokemonSelect.addEventListener("click", selectPokemon)


var button = document.getElementById("buttonFire");

button.addEventListener("click" , buttonFire)
function buttonFire(event) {
  pokemon1 = "charizard"
  pokemon2 = "arcane"
  pokemon3 = "flareon"
  type = "fire"
  document.getElementById("stats").setAttribute("style", "display: none")
  injectPokemon([pokemon1, pokemon2, pokemon3])
}

var button2 = document.getElementById("buttonWater");
button2.addEventListener("click" , buttonWater)
function buttonWater(event) {
  pokemon1 = "vaporeon"
  pokemon2 = "squirtle"
  pokemon3 = "gyarados"
  type = "water"
  document.getElementById("stats").setAttribute("style", "display: none")
  injectPokemon([pokemon1, pokemon2, pokemon3])
}

function injectPokemon(pokemons) {
  for(var i = 1; i < 4; i ++) {
    document.getElementById("pokemon" + i).src="assets/" + pokemons[i - 1] + ".gif"
  }
}
