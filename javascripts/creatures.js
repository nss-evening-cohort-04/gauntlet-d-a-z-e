var Gauntlet = (function(OldGauntlet){

  OldGauntlet.Creatures = {};

  OldGauntlet.Creatures.Friend = function() {
    this.name = "";
    this.damage = 0;

    this.toString = function() {
      var friendOutput = [
      this.name, 
      " a ", 
      this.species,
      " with a damage of ",
      this.damage].join("");
      // return this.name;
      return friendOutput;
    }
  };
  
  OldGauntlet.Creatures.Dobby = function() {
    this.name = "Dobby";
    this.species = "House Elf";
    this.damage = Math.floor(Math.random() * 10 + 10);
  };
  OldGauntlet.Creatures.Dobby.prototype = new OldGauntlet.Creatures.Friend();

  OldGauntlet.Creatures.Buckbeak= function() {
    this.name = "Buckbeak";
    this.species = "Hippogriff";
    this.damage = Math.floor(Math.random() * 10 + 10);
  };
  OldGauntlet.Creatures.Buckbeak.prototype = new OldGauntlet.Creatures.Friend();

  OldGauntlet.Creatures.Fawkes = function() {
    this.name = "Fawkes";
    this.species = "Phoenix";
    this.damage = Math.floor(Math.random() * 10 + 10);

  };
  OldGauntlet.Creatures.Fawkes.prototype = new OldGauntlet.Creatures.Friend();

  return OldGauntlet;
})(Gauntlet || {})
