var Gauntlet = (function(OldGauntlet) {
	OldGauntlet.startAttack = function(warriorObj, orcObj){
		$("#output").append(warriorObj.toString());
		$("#output").append(orcObj.toString());
	};
	return OldGauntlet;
})(Gauntlet || {});

// function Attack (warriorObj, orcObj){
// 	console.log(warriorObj);
// 		console.log(orcObj);
// }