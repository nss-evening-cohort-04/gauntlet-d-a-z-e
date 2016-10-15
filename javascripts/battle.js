var Gauntlet = (function(OldGauntlet) {
	OldGauntlet.startAttack = function(warriorObj, orcObj){
		$("output").html("");
		$("#output").append(warriorObj.toString());
		$("#output").append(orcObj.toString());
	};
	OldGauntlet.runAttack = function(warriorObj, orcObj){
		console.log(warriorObj.health);
	};
	return OldGauntlet;
})(Gauntlet || {});

// function Attack (warriorObj, orcObj){
// 	console.log(warriorObj);
// 		console.log(orcObj);
// }