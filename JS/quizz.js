var Spongbob = 0;
var Sqiud = 0;
var Krab = 0;



function hideResult() {
	document.getElementById("Ifsponge").style.display = 'none';
	document.getElementById("Ifsquid").style.display = 'none';
	document.getElementById("Ifkrab").style.display = 'none';
}

function hideQuestions() {
	document.getElementById("One").style.display = 'none';
	document.getElementById("Two").style.display = 'none';
	document.getElementById("Three").style.display = 'none';
    document.getElementById("Four").style.display = 'none';
	document.getElementById("Five").style.display = 'none';
}
function hidePhotos() {
	document.getElementById("plank").style.display = 'none';
	document.getElementById("Five").style.display = 'none';
	document.getElementById("spongwin").style.display = 'none';
	document.getElementById("krabwin").style.display = 'none';
	document.getElementById("squidwin").style.display = 'none';
	document.getElementById("spongesquid").style.display = 'none';
	document.getElementById("krabsquid").style.display = 'none';
	document.getElementById("krabsponge").style.display = 'none';

}
function showJustOne() {
	document.getElementById("One").style.display = 'block';
	document.getElementById("Two").style.display = 'none';
	document.getElementById("Three").style.display = 'none';
    document.getElementById("Four").style.display = 'none';
	document.getElementById("Five").style.display = 'none';
	document.getElementById("everyone").style.display = 'none';
	document.getElementById("krab").style.display = 'block';


}

function showJustTwo() {
	document.getElementById("One").style.display = 'none';
	document.getElementById("Two").style.display = 'block';
	document.getElementById("Three").style.display = 'none';
    document.getElementById("Four").style.display = 'none';
	document.getElementById("Five").style.display = 'none';
	document.getElementById("krab").style.display = 'none';
	document.getElementById("spongy").style.display = 'block';
}



function showJustThree() {
	document.getElementById("One").style.display = 'none';
	document.getElementById("Two").style.display = 'none';
	document.getElementById("Three").style.display = 'block';
    document.getElementById("Four").style.display = 'none';
	document.getElementById("Five").style.display = 'none';
	document.getElementById("spongy").style.display = 'none';
	document.getElementById("patrik").style.display = 'block';


}

function showJustFour() {
	document.getElementById("One").style.display = 'none';
	document.getElementById("Two").style.display = 'none';
	document.getElementById("Three").style.display = 'none';
    document.getElementById("Four").style.display = 'block';
	document.getElementById("Five").style.display = 'none';
	document.getElementById("patrik").style.display = 'none';
	document.getElementById("squidy").style.display = 'block';


}

function showJustFive() {
	document.getElementById("One").style.display = 'none';
	document.getElementById("Two").style.display = 'none';
	document.getElementById("Three").style.display = 'none';
    document.getElementById("Four").style.display = 'none';
	document.getElementById("Five").style.display = 'block';
	document.getElementById("squidy").style.display = 'none';
	document.getElementById("plank").style.display = 'block';

}
function saveAnswerSponge() {
	Spongbob+=1;
	console.log ("Spongbob" + Spongebob);
}
function saveAnswerSquid() {
	Sqiud+=1;
	console.log ("Sqiud" + Sqiud);
}
function saveAnswerKrab() {
	Krab+=1;
	console.log ("Krab" + Krab);
}


function finalScore() {
	
	if(Spongbob> Sqiud && Spongbob> Krab){
		console.log("you are Spongbob");
		document.getElementById("Ifsponge").style.display = 'block';
	}
	if(Krab> Sqiud &&  Krab > Spongbob){
		console.log("you are Krab");
		document.getElementById("Ifkrab").style.display = 'block';
	}
	if(Sqiud> Spongbob && Sqiud > Krab){
		console.log("you are Sqiud");
		document.getElementById("Ifsquid").style.display = 'block';
	}
	if(Sqiud == Spongbob ){
		console.log("oh wow! you are both squid and sponge");
		document.getElementById("spongesquid").style.display = 'block';
	}
	if(Sqiud == Krab ){
		console.log("oh wow! you are both squid and krab");
		document.getElementById("krabsquid").style.display = 'block';
	}
	if(Spongbob == Krab ){
		console.log("oh wow! you are both krab and squid");
		document.getElementById("krabsponge").style.display = 'block';
	}

}


