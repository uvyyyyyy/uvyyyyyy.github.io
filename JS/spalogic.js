document.body.onload = function () {
	initState();
	initRendering();
	document.getElementById("prev").onclick = prev;
	document.getElementById("next").onclick = next;
}



//Our state consists of the selected answers so far, and the current Question
var selectedAnswers = [];
var selectedQuestion;

function initState() {
	for (var i=0; i < questions.length; i++) {
		selectedAnswers[i] = NO_ANSWER;
	}
	selectedQuestion = 0;
}

	function initRendering(){
		for (var i=0; i < questions.length; i++) {
			var current = questions[i];
			var question = "<div id=\"question" + i + "\" class=\"question" + i + " question\">";
			question += "<div id=\"questionte" + i + "\" class=\"qtext" + i + " qtext\"> " + current[0]  + " </div>";
			question += "<div id=\"qimage" + i + "\" class=\"qimage" + i + " qimage\"><img src=\"" + current[1] + "\"></div>";
			question += "<div id=\"answers" + i + "\" class=\"divanswers" + i + " divanswers\">";
			for (j=2; j < current.length; j++) {
				var realJ = j - 1;
				question += "	<div id=\"answer" + i + "_" + realJ + "\" onclick=\"choose(" + i + "," + realJ + ")\" class=\"answers" + i + " answers\"> " + realJ + 
				": " + current[j] + " </div>";
			}
			
			question += "</div><!--End of Answers " + i + " -->";
			question += "</div><!--End of Question " + i + " -->";
			console.log (question);
			document.getElementById("questions").innerHTML += question;			
		}	
			
		hideAll();
		showQuestion(0);
	}
	
	
	function prev() {
		if (selectedQuestion > 0) {
			hideQuestion(selectedQuestion);
			selectedQuestion --;
			showQuestion(selectedQuestion);
		}
	}
	
	function next() {
		hideQuestion(selectedQuestion);
		if (selectedQuestion < questions.length - 1) {			
			selectedQuestion++;
			showQuestion(selectedQuestion);
		} else {
			endQuestions();
		}
	}
	
	function endQuestions() {
		hideAll();
		document.getElementById("prev").style.display = "none";
		document.getElementById("next").style.display = "none";
		
		document.getElementById("results").style.display = "display";
		var total=0;
		for(var i in selectedAnswers) { 
			total += selectedAnswers[i]; 
		}
		document.getElementById("results").innerHTML = "Your score is: " + total + "!";
	}
	
	function hideAll() {
		for (var i=0; i < questions.length; i++) {
			document.getElementById("question" + i).style.display = "none";
		}
	}
	
	function hideQuestion(x) {
		document.getElementById("question" + x).style.display = "none";		
	}
	
	function showQuestion(x) {
		document.getElementById("question" + x).style.display = "block";		
	}
	
	function choose(q, a) {
		console.log("choose(" + q + ", " + a + "), selectedAnswer: " + selectedAnswers[q] );
		if (a == selectedAnswers[q]) {
			unmark(q, a);
			selectedAnswers[q] = NO_ANSWER;
		} else {
			if (selectedAnswers[q] != NO_ANSWER) {
				unmark(q,selectedAnswers[q]);
			}
			mark(q, a);
			selectedAnswers[q] = a;
		}
	}

	function mark(q, a) {
		console.log("mark(" + q + ", " + a + ")" );
		document.getElementById("answer" + q + "_" + a).className = " marked";
	}
	
	function unmark(q, a) {
		console.log("unmark(" + q + ", " + a + ")" );
		document.getElementById("answer" + q + "_" + a).className = "answers" + q + " answers";
	}