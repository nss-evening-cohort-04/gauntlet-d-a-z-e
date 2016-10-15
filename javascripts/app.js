
console.log(Gauntlet);


/*
  Test code to generate a human player and an orc player
 */
// var warrior = new Gauntlet.Combatants.Human();
// warrior.setWeapon(new Gauntlet.Weapons.WarAxe());
// warrior.generateClass();  // This will be used for "Surprise me" option
// console.log(warrior.toString());

// var orc = new Gauntlet.Combatants.Orc();
// orc.generateClass();
// orc.setWeapon(new Gauntlet.Weapons.BroadSword());
// console.log(orc.toString());


  // Test code to generate a spell
 
var spell = new Gauntlet.SpellBook.Sphere();
console.log("spell: ", spell.toString());


$(document).ready(function() {
  /*
    Show the initial view that accepts player name
//    */
	
  $("#player-setup").show();
  var warrior;
  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;
	
    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        console.log("hi I'm card Class");
        var player = $("#player-name").val();
        warrior = new Gauntlet.Combatants.Human();
        warrior.name = player;
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        console.log(warrior.class.magical);
        if (warrior.class.magical){
        	$("#userSpell").show();
        	$("#userWeapon").hide();
        	
        	console.log("hi");
        } else {
        	$("#userSpell").hide();
        	$("#userWeapon").show();
        	console.log("bye");
        }
    
        break;
       case "card--battleground":
       	moveAlong = ($("#player-name").val() !== "");
       	var orc = new Gauntlet.Combatants.Orc();
		orc.generateClass();
		orc.generateWeapon();
		Gauntlet.startAttack(warrior, orc);
       	break;
       default :
       console.log("everything is broken fml");
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });
  
  $("#userClass").click(function(e){
  		var test = $(e.target).is(".btn__text");
  		if (test){
  			let clicked = $(e.target).find(".btn__text").context.innerHTML;
  			if (clicked === "surprise me"){
  				warrior.generateClass(); 
  			} else {
  				warrior.class = new Gauntlet.GuildHall[clicked]();
  			}
  			
  			console.log("Class Page Warrior", warrior);
  		} 
  		
  	});

  $("#userWeapon").click(function(e){
  	var test = $(e.target).is(".btn__text");
  	if (test){
  			let clicked = $(e.target).find(".btn__text").context.innerHTML;
  		  
  			warrior.weapon = new Gauntlet.Weapons[clicked]();
  			console.log("Weapon Page Warrior", warrior);
  	}
  });
  $("#userSpell").click(function(e){
  	var test = $(e.target).is(".btn__text");
  	if (test){
  		  let clicked = $(e.target).find(".btn__text").context.innerHTML;

  			warrior.weapon = new Gauntlet.SpellBook[clicked]();
  			console.log("Weapon Page Warrior", warrior);
  	}
  });

  $("#userBattleground").click(function(e){
  	console.log("attack");
  })
  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});
