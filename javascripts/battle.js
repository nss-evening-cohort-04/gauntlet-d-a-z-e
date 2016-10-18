var Gauntlet = (function(OldGauntlet) {
	
	OldGauntlet.startAttack = function(studentObj, deathEaterObj){
		$("#studentStats").html("");
		$("#studentStats").append(studentObj.toString());
		$("#deathEaterStats").html("");
		$("#deathEaterStats").append(deathEaterObj.toString());
	};
	OldGauntlet.generateImage = function(){
		var Gifs = new Array();
		Gifs[0]="../gif/gif1.gif";
		Gifs[1]="../gif/gif2.gif";
		Gifs[2]="../gif/gif3.gif";
		var random = Math.round(Math.random() * Gifs.length - 1);
		console.log("random", random);
		var printGif = Gifs[random];
		console.log("printGif", printGif);
		// $("#batteImage").attr("src", "");
		$("#battleImage").attr("src", printGif);
		console.log($("#battleImage"));
		$('#battleImage').fadeIn('fast').delay(2000).fadeOut('fast');
	};
	OldGauntlet.runAttack = function(studentObj, deathEaterObj, studentType, battleObj){
        studentObj.health -= deathEaterObj.spell.damage;
				var studentHealthBar = $("#student_health");
				console.log("studentHealthBar.value", studentHealthBar);
				studentHealthBar.attr('value', studentObj.health);
        		console.log("student health, post damage: ",studentObj.health);
			deathEaterObj.health -= studentType.damage;
				var deathEaterHealthBar = $("#deatheater_health");
        		deathEaterHealthBar.attr('value', deathEaterObj.health);
        		console.log("deathEater health, post damage: ",deathEaterObj.health);
        $("#battleStats").html("");		
		$("#battleStats").html(`<div> <h1>Battle ${battleObj}</h1> ${studentObj.playerName} has ${studentType}</div>`);
        $("#battleStats").append(`<div>${deathEaterObj.playerName} has ${deathEaterObj.spell}</div>`);
        if (studentObj.health <= 0) {
            $("#loseMessage").append(`You lost to your enemy with ${studentObj.health} points!`)
			$("#userLose").modal('show');
			$(".card__button").addClass("disabledbutton");
        } else if (deathEaterObj.health <= 0) {
            $("#winMessage").append(`You won with ${studentObj.health} points over your enemy!`)
			$("#userWin").modal('show');
			$(".card__button").addClass("disabledbutton");
        }


	};
	
	return OldGauntlet;
})(Gauntlet || {});
