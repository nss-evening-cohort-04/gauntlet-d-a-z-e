
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
    //     $(".class__link").click(function(e){
  		// 	let clicked = e.currentTarget;
  		// 	// clicked.setAttribute("selected", "true");
  		// 	let classClicked = clicked.childNodes[3].innerHTML;
  		// 	warrior.class = new Gauntlet.GuildHall[classClicked]();
  		// 	console.log("Class Page Warrior", warrior);
  		// });
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        console.log("hi I'm card Weapon");
  		// $(".class__link").click(function(e){
  		// 	let clicked = e.currentTarget;
  		// 	// // clicked.setAttribute("selected", "true");
  		// 	let weaponClicked = clicked.childNodes[3].innerHTML;
  		// 	warrior.weapon = new Gauntlet.Weapons[weaponClicked]();
  		// 	console.log("Weapon Page Warrior", warrior);
  		// });
        
        break;
       case "card--battleground":
       	moveAlong = ($("#player-name").val() !== "");
       	console.log(warrior.toString());

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
  		var test = $(e.target).find(".btn__text");
  		if (test.context.children[0]){
  			console.log(test.context.innerHTML);
  		}
  		
  		// console.log(test.context.innerHTML);
  		// let clicked = test.context.innerHTML;
  		// 	// clicked.setAttribute("selected", "true");
  		// 	// let classClicked = clicked.childNodes[3].innerHTML;
  		// 	warrior.class = new Gauntlet.GuildHall[clicked]();
  		// 	console.log("Class Page Warrior", warrior);
  		// } else if($(".card__link").next === "card--weapon"){
    //     	console.log("hi");
    //     	let clicked = e.currentTarget;
  		// 	// // clicked.setAttribute("selected", "true");
  		// 	let weaponClicked = clicked.childNodes[3].innerHTML;
  		// 	warrior.weapon = new Gauntlet.Weapons[weaponClicked]();
  		// 	console.log("Weapon Page Warrior", warrior);

    //     }
  	});
  $("#userWeapon").click(function(e){
  	var test = $(e.target).find(".btn--big");
  		console.log(test.context.innerHTML);
  		  	let clicked = test.context.innerHTML;
  		// 	// // clicked.setAttribute("selected", "true");
  		// 	let weaponClicked = clicked.childNodes[3].innerHTML;
  			warrior.weapon = new Gauntlet.Weapons[clicked]();
  			console.log("Weapon Page Warrior", warrior);
  });
  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});
