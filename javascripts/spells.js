/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = (function(OldGauntlet){
  OldGauntlet.SpellBook = {};


/*
  Base spell function that defines name, damage, damage type
 */
  OldGauntlet.SpellBook.Spell = function() {
    this.name = "";
    this.damage = 0;

    this.toString = function() {
      return " You cast " + this.name + " for " + this.damage + " damage";
    }
  };

  /*
    An elemental sphere that can be cast by a magical class
   */
  OldGauntlet.SpellBook.Expelliarmus = function() {
    this.name = "Expelliarmus";
    this.damage = Math.floor(Math.random() * 10 + 10);
  };
  OldGauntlet.SpellBook.Expelliarmus.prototype = new OldGauntlet.SpellBook.Spell();

  OldGauntlet.SpellBook.Confringo = function() {
    this.name = "Confringo";
    this.damage = Math.floor(Math.random() * 10 + 10);
  };
  OldGauntlet.SpellBook.Confringo.prototype = new OldGauntlet.SpellBook.Spell();

  OldGauntlet.SpellBook.Conjunctivitis = function() {
    this.name = "Conjunctivitis";
    this.damage = Math.floor(Math.random() * 10 + 10);

  };
  OldGauntlet.SpellBook.Conjunctivitis.prototype = new OldGauntlet.SpellBook.Spell();

  OldGauntlet.SpellBook.Imperio = function() {
    this.name = "Imperio";
    this.damage = Math.floor(Math.random() * 10 + 10);

  };
  OldGauntlet.SpellBook.Imperio.prototype = new OldGauntlet.SpellBook.Spell();

  OldGauntlet.SpellBook.Crucio = function() {
    this.name = "Crucio";
    this.damage = Math.floor(Math.random() * 10 + 10);

  };
  OldGauntlet.SpellBook.Crucio.prototype = new OldGauntlet.SpellBook.Spell();

  return OldGauntlet;
})(Gauntlet || {})
