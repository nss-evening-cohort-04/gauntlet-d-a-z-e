/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = (function(OldGauntlet) {
  OldGauntlet.Hogwarts = {};

/*
  Base function for a player, or enemy, class (profession)
 */
OldGauntlet.Hogwarts.PlayerClass = function() {
  this.name = "Beggar";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  // this.magical = false;

  this.toString = function() {
    return this.name;
  }
};

/*
    SORTING HAT CLASSES
      - Gryffindor
      - Hufflepuff
      - Ravenclaw
      - Slytherin
 */
OldGauntlet.Hogwarts.Student = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
OldGauntlet.Hogwarts.Student.prototype = new OldGauntlet.Hogwarts.PlayerClass();


OldGauntlet.Hogwarts.Gryffindor = function() {
  this.name = "Gryffindor";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
  this.image = "<img src='../img/wat.png' width=300px height=250px>";
};
OldGauntlet.Hogwarts.Gryffindor.prototype = new OldGauntlet.Hogwarts.Student();


OldGauntlet.Hogwarts.Hufflepuff = function() {
  this.name = "Hufflepuff";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
  this.image = "<img src='../img/Conjunctivitis.jpg' width=300px height=250px>";
};
OldGauntlet.Hogwarts.Hufflepuff.prototype = new OldGauntlet.Hogwarts.Student();


OldGauntlet.Hogwarts.Ravenclaw = function() {
  this.name = "Ravenclaw";
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
  this.image = "<img src='../img/hagrid.png' width=300px height=250px>";
};
OldGauntlet.Hogwarts.Ravenclaw.prototype = new OldGauntlet.Hogwarts.Student();


OldGauntlet.Hogwarts.Slytherin = function() {
  this.name = "Slytherin";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 40;
  this.image = "<img src='../img/hogwartscastle.jpg' width=300px height=250px>";
};
OldGauntlet.Hogwarts.Slytherin.prototype = new OldGauntlet.Hogwarts.Student();


 return OldGauntlet;
 })(Gauntlet || {});
