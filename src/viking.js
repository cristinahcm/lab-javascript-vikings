// Soldier
class Soldier {

  //THE CONSTRUCTOR SHOULD RECEIVE 2 ARGUMENTS - HEALTH AND STRENGHT
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }

  //ATTACK METHOD (FUNCTION) - no arguments
  attack() {

    return this.strength;
  }

  //RECEIVE DAMAGE METHOD (FUNCTION) - 1 ARGUMENT, THE DAMAGE
  receiveDamage(damage) {
    this.health -= damage;
  }


}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health,strength)
    this.health = health;
    this.strength = strength;
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
  }
  }

  battleCry() {
    return "Odin Owns You All!"
  }
}


// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
    super(health,strength)
    this.health = health;
    this.strength = strength;
  } 

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
    return (`A Saxon has received ${damage} points of damage`)
  } else {
    return "A Saxon has died in combat"
  }
  }

}


// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  
addViking(Viking){
  this.vikingArmy.push(Viking);
}

addSaxon(saxonObject){
  this.saxonArmy.push(saxonObject);
}

vikingAttack(){
this.damage = this.strength;
}

saxonAttack(){}

showStatus(){}
}





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
