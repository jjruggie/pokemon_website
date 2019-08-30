var button = document.getElementById("attack");

button.addEventListener("click", attackButton)

function attackButton(event) {
  document.getElementById("sprite").src="assets/pikachu-attack.png"
  window.setTimeout(setSprite, 1000)
  pikachu.special(chardizard)
  document.getElementById("hp2").innerHTML = chardizard.hp + " hp"
}

function setSprite() {
  document.getElementById("sprite").src="assets/pikachu.png"

}
var chardizard = new pokemon("Chardizard", "fire", 120, 10)
var pikachu = new pokemon("Pikachu", "electric", 100, 10)
window.onload = function() {
  document.getElementById("name").innerHTML = pikachu.name
  document.getElementById("type").innerHTML = pikachu.type
  document.getElementById("hp").innerHTML = pikachu.hp + " hp"
  document.getElementById("level").innerHTML = "Level " + pikachu.level
  document.getElementById("name2").innerHTML = chardizard.name
  document.getElementById("type2").innerHTML= chardizard.type
  document.getElementById("hp2").innerHTML = chardizard.hp + " hp"
  document.getElementById("level2").innerHTML= "Level " + chardizard.level
}




var chardizard = new pokemon("Chardizard", "fire", 120, 10)
var squirtle = new pokemon("Squirtle", "water", 125, 10)
var hitmachamp = new pokemon("Hitmachamp", "fighting", 125, 10)
var mewtwo = new pokemon("Mewtwo", "psychic", 125, 10)
var geodude = new pokemon("Geodude", "normal", 125, 10)
var bulbasaur = new pokemon("Bulbasaur", "grass", 125, 10)
