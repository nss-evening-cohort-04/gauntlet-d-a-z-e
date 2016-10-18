
console.log(Gauntlet);



$(document).ready(function() {
  /*
    Show the initial view that accepts player name
//    */

  $("#player-setup").show();
  var student;
  var deathEater = new Gauntlet.Combatants.Voldemort();
  deathEater.generateSpell();
  deathEater.generateNames();
  console.log("deathEater", deathEater);
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
        student = new Gauntlet.Combatants.Wizard();
        student.playerName = player;

        break;
      case "card--weapon":
        moveAlong = (student.house !== null);
        if (student.house === null) {
          alert("Please select a house.");
          break;
        }
        // console.log(warrior.class.magical);
        // if (warrior.class.magical){
        //   $("#userSpell").show();
        //   $("#userWeapon").hide();

        //   console.log("hi");
        // } else {
        //   $("#userSpell").hide();
        //   $("#userWeapon").show();
        //   console.log("bye");
        // }

        break;
       case "card--battleground":
        moveAlong = (student.patronus !== null);
        if (student.patronus === null) {
          alert("Please select a patronus.");
          break;
        }


        break;
       default :
       console.log("everything is broken fml");
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  $("#userSortingHat").click(function(e){

      var test = $(e.target).is(".btn__text");
      if (test){
        let clicked = $(e.target).find(".btn__text").context.innerHTML;

        if (clicked === "Put on the Sorting Hat"){
          student.generateHouse();
        } else {
          student.house = new Gauntlet.Hogwarts[clicked]();
          console.log("student", student);
        }

      }

    });

  $("#userPatronus").click(function(e){
    var test = $(e.target).is(".btn__text");
    if (test){
        let clicked = $(e.target).find(".btn__text").context.innerHTML;

        student.patronus = new Gauntlet.Patroni[clicked]();
        console.log("patronus", student);
    }
  });
  // $("#userSpell").click(function(e){
  //   var test = $(e.target).is(".btn__text");
  //   if (test){
  //       let clicked = $(e.target).find(".btn__text").context.innerHTML;

  //       warrior.weapon = new Gauntlet.SpellBook[clicked]();
  //       console.log("Weapon Page Warrior", warrior);
  //   }
  // });

  $("#defeatEnemies").click(function(e){
      Gauntlet.startAttack(student, deathEater);
  });
  var battle = 0;
  $("#AttackEnemy").click(function(e){
      battle++;
      Gauntlet.runAttack(student, deathEater, battle);
      
  });
  $("#castSpell").click(function(e){
    battle++;
    student.generateSpell();
    Gauntlet.castSpell(student, deathEater, battle);
    
  });
  $("#getFriend").click(function(e){
    battle++;
    student.generateCreature();
    Gauntlet.getFriend(student, deathEater, battle);
    
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
