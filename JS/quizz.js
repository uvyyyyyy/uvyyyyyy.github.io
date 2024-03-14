var Spongbob = 0;
var Sqiud = 0;
var Krab = 0;
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
	
}
function saveAnswerSquid() {
	Sqiud+=1;
	
}
function saveAnswerKrab() {
	Krab+=1;
	
}


function finalScore() {
	
	if(Spongbob> Sqiud && Spongbob> Krab){
		document.getElementById("spongwin").style.display = 'block';
	}
	if(Krab> Sqiud &&  Krab > Spongbob){
		document.getElementById("krabwin").style.display = 'block';
	}
	if(Sqiud> Spongbob && Sqiud > Krab){
		document.getElementById("squidwin").style.display = 'block';
	}
	if(Sqiud == Spongbob ){
		document.getElementById("spongesquid").style.display = 'block';
	}
	if(Sqiud == Krab ){
		document.getElementById("krabsquid").style.display = 'block';
	}
	if(Spongbob == Krab ){
		document.getElementById("krabsponge").style.display = 'block';
	}

}


