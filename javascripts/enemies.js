var Gauntlet = (function(OldGauntlet){
  // OldGauntlet.Orc = {};


OldGauntlet.Combatants.Voldemort = function() {
  this.health = this.health + 20;
  this.species = "Voldemort";
  this.allowedNames = ["Zoe Ames", "Nathan Gonzalez", "William Hickok"]
  this.allowedSpells = ["Imperio", "Crucio"];
  this.house = "Slytherin",
  this.image = "<img src='../img/voldemort.jpg' width=300px height=250px>";
  this.generateNames = function(){
    var random = Math.round(Math.random() * (this.allowedNames.length - 1));

      // Get the string at the index
      var randomClass = this.allowedNames[random];

      // Composes the corresponding player class into the player object
      this.playerName = randomClass;
      return this.playerName;
  }
};


OldGauntlet.Combatants.Voldemort.prototype = new OldGauntlet.Combatants.DeathEater();

return OldGauntlet;
})(Gauntlet || {})
