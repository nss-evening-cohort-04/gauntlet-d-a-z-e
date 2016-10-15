var Gauntlet = (function(OldGauntlet){
  // OldGauntlet.Orc = {};


OldGauntlet.Combatants.Orc = function() {
  this.health = this.health + 20;
  this.species = "Orc";
  this.allowedNames = ["Zoe Ames", "Nathan Gonzalez", "William Hickok"]
  this.allowedClasses = ["Warrior", "Berserker", "Shaman"];
  this.allowedWeapons = ["Dagger", "BroadSword", "WarAxe"];
  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new OldGauntlet.GuildHall[randomClass]();
    return this.class;
  };
  this.generateWeapon = function(){
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

      // Get the string at the index
      var randomClass = this.allowedWeapons[random];

      // Composes the corresponding player class into the player object
      this.weapon = new OldGauntlet.Weapons[randomClass]();
      return this.weapon;
  };
  this.generateNames = function(){
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

      // Get the string at the index
      var randomClass = this.allowedNames[random];

      // Composes the corresponding player class into the player object
      this.playerName = randomClass;
      return this.playerName;
  }
};


OldGauntlet.Combatants.Orc.prototype = new OldGauntlet.Combatants.Monster();

return OldGauntlet;
})(Gauntlet || {})
