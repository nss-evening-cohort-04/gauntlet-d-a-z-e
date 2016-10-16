var Gauntlet = (function(OldGauntlet) {
	OldGauntlet.startAttack = function(warriorObj, orcObj){
		$("#warriorStats").html("");
		$("#warriorStats").append(warriorObj.toString());
		$("#orcStats").html("");
		$("#orcStats").append(orcObj.toString());
	};
	OldGauntlet.runAttack = function(warriorObj, orcObj, battleObj){
        warriorObj.health -= orcObj.weapon.damage;
        console.log("Warrior health, post damage: ",warriorObj.health);
        orcObj.health -= warriorObj.weapon.damage;
        console.log("Orc health, post damage: ",orcObj.health);
				$("#battleStats").html(`<div> Battle${battleObj}: ${warriorObj.playerName} has ${warriorObj.health} health remaining</div>`);
        $("#battleStats").append(`<div> Battle${battleObj}: ${orcObj.playerName} has ${orcObj.health} health remaining</div>`);
        if (warriorObj.health <= 0) {
            $("#loseMessage").append(`You lost to your enemy with ${warriorObj.health} points!`)
			$("#userLose").modal('show');
        } else if (orcObj.health <= 0) {
            $("#winMessage").append(`You won with ${warriorObj.health} points over your enemy!`)
			$("#userWin").modal('show');
        }


	};
	return OldGauntlet;
})(Gauntlet || {});
