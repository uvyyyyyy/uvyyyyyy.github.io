var Spongbob = 0;
var Sqiud = 0;
var Krab = 0;
function hideQuestions() {
	document.getElementById("One").style.display = 'none';
	document.getElementById("Two").style.display = 'none';
	document.getElementById("Three").style.display = 'none';
    document.getElementById("Four").style.display = 'none';
	document.getElementById("Five").style.display = 'none';
	document.getElementById("Next").onclick = showJustOne;
}
function showJustOne() {
	document.getElementById("One").style.display = 'block';
	document.getElementById("Two").style.display = 'none';
	document.getElementById("Three").style.display = 'none';
    document.getElementById("Four").style.display = 'none';
	document.getElementById("Five").style.display = 'none';
	document.getElementById("Next").onclick = showJustTwo;


}

function showJustTwo() {
	document.getElementById("One").style.display = 'none';
	document.getElementById("Two").style.display = 'block';
	document.getElementById("Three").style.display = 'none';
    document.getElementById("Four").style.display = 'none';
	document.getElementById("Five").style.display = 'none';
	document.getElementById("Next").onclick = showJustThree;
	document.getElementById("Back").onclick = showJustOne;


}

function showJustThree() {
	document.getElementById("One").style.display = 'none';
	document.getElementById("Two").style.display = 'none';
	document.getElementById("Three").style.display = 'block';
    document.getElementById("Four").style.display = 'none';
	document.getElementById("Five").style.display = 'none';
	document.getElementById("Next").onclick = showJustFour;
	document.getElementById("Back").onclick = showJustTwo;


}

function showJustFour() {
	document.getElementById("One").style.display = 'none';
	document.getElementById("Two").style.display = 'none';
	document.getElementById("Three").style.display = 'none';
    document.getElementById("Four").style.display = 'block';
	document.getElementById("Five").style.display = 'none';
	document.getElementById("Next").onclick = showJustFive;
	document.getElementById("Back").onclick = showJustThree;


}

function showJustFive() {
	document.getElementById("One").style.display = 'none';
	document.getElementById("Two").style.display = 'none';
	document.getElementById("Three").style.display = 'none';
    document.getElementById("Four").style.display = 'none';
	document.getElementById("Five").style.display = 'block';
	document.getElementById("Back").onclick = showJustFour;

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
		alert ("you are spongebob!");
	}
	if(Krab> Sqiud && Spongbob < Krab){
		alert ("you are Krab!");
	}
	if(Sqiud> Spongbob && Sqiud > Krab){
		alert ("you are Squid!");
	}
}

const answers = document.querySelectorAll('.answer');

// Remove any existing 'chosen-answer' class from all answers
answers.forEach(answer => answer.classList.remove('chosen-answer'));

// Add 'chosen-answer' class to the chosen answer
answers[chosenAnswerIndex].classList.add('chosen-answer');


