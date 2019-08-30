function pokemon(name, type, hp, level) {
  this.name = name
  this.type = type
  this.hp = hp
  this.level = level
  this.attack = function (pokemon) {
  pokemon.hp = pokemon.hp - 10
 }
  this.heal = function () {
    this.hp += 10
    return this.hp + " health"
  }
  this.special = function (pokemon) {
    if (this.type === "electric") {
      var damage = Math.floor(25 * Math.random())
      if (pokemon.type === "water") {
        damage = Math.floor(35 * Math.random())
      }
      pokemon.hp = pokemon.hp - damage
      return this.name + " electricutes " + pokemon.name + " for: " + damage +" Damage"
    } else if (this.type === "fire") {
      var damage = Math.floor(20 * Math.random())
      if (pokemon.type === "grass") {
        damage = Math.floor(30 * Math.random())
      }
      pokemon.hp = pokemon.hp - damage
      return this.name + " burns " + pokemon.name + " for: " + damage + " Damage"
    } else if (this.type === "grass") {
      var damage = Math.floor(15 * Math.random())
      if (pokemon.type === "grass") {
        damage = Math.floor(25 * Math.random())
      }
      pokemon.hp = pokemon.hp - damage
      return this.name + " cuts " + pokemon.name + " for: " + damage + " Damage"
    } else if (this.type === "normal") {
      pokemon.hp = pokemon.hp - 25
      return this.name + " smashes " + pokemon.name + " for: 25 Damage"
    } else if (this.type === "psychic") {
      var damage = Math.floor(40 * Math.random())
      if (pokemon.type === "fighting") {
        damage = Math.floor(50 * Math.random())
      }
      pokemon.hp = pokemon.hp - damage
      return this.name + " destroys " + pokemon.name + " for: " + damage + " Damage"
    } else if (this.type === "water") {
      var damage = Math.floor(35 * Math.random())
      if (pokemon.type === "fire") {
        damage = Math.floor(45 * Math.random())
      }
      pokemon.hp = pokemon.hp - damage
      return this.name + " waters " + pokemon.name + " for: " + damage + " Damage"
    } else if (this.type === "fighting") {
      var damage = Math.floor(10 * Math.random())
      if (pokemon.type === "normal") {
        damage = Math.floor(20 * Math.random())
      }
      pokemon.hp = pokemon.hp - damage
      return this.name + " punches " + pokemon.name + " for: " + damage + " Damage"
    }
  }
}
