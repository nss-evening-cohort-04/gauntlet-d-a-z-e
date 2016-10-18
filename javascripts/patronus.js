/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = (function(OldGauntlet) {
  OldGauntlet.Patroni = {};

/*
  Base function for a player, or enemy, class (profession)
 */
   OldGauntlet.Patroni.Patronus = function() {
    this.name = "Patronus"
    this.animal = "";
    this.damage = 0;
    this.toString = function() {
      return "cast " + this.name + " of " + this.animal + " for " + this.damage + " damage";

    }
  };



OldGauntlet.Patroni.Stag = function() {
  this.animal = "Stag";
  this.damage = Math.floor(Math.random() * 10 + 10);
};
OldGauntlet.Patroni.Stag.prototype = new OldGauntlet.Patroni.Patronus();


OldGauntlet.Patroni.Otter = function() {
  this.animal = "Otter";
  this.damage = Math.floor(Math.random() * 10 + 10);
};
OldGauntlet.Patroni.Otter.prototype = new OldGauntlet.Patroni.Patronus();


OldGauntlet.Patroni.Hedgehog = function() {
  this.animal = "Hedgehog";
  this.damage = Math.floor(Math.random() * 10 + 10);
};
OldGauntlet.Patroni.Hedgehog.prototype = new OldGauntlet.Patroni.Patronus();

OldGauntlet.Patroni.Dolphin = function() {
  this.animal = "Dolphin";
  this.damage = Math.floor(Math.random() * 10 + 10);
};
OldGauntlet.Patroni.Dolphin.prototype = new OldGauntlet.Patroni.Patronus();

 return OldGauntlet;
 })(Gauntlet || {});
