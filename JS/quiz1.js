var Spongebob = 0;
var Squidward = 0;
var MrKrab = 0;
var menus = document.getElementsByClassName("menu");
var questions = document.getElementsByClassName("question");
var buttons = document.getElementsByClassName("buttons");
var results = document.getElementsByClassName("result");
function hideQuestion () {
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'none';
    document.getElementById("third").style.display = 'none';
    document.getElementById("fourth").style.display = 'none';
    document.getElementById("fifth").style.display = 'none';
    document.getElementById("everyone").style.display = 'block';
    for (var i = 0; i < results.length; i++) {
        results[i].style.display = 'none';
    } 
}
function showQuestion1 () {
    document.getElementById("first").style.display = 'block';
    document.getElementById("second").style.display = 'none';
    document.getElementById("third").style.display = 'none';
    document.getElementById("fourth").style.display = 'none';
    document.getElementById("fifth").style.display = 'none';
    document.getElementById("everyone").style.display = 'none';
    document.getElementById("Krabs").style.display = 'block';
    document.getElementById("next").onclick = showQuestion2;
}
function showQuestion2 () {
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'block';
    document.getElementById("third").style.display = 'none';
    document.getElementById("fourth").style.display = 'none';
    document.getElementById("fifth").style.display = 'none';
    document.getElementById("everyone").style.display = 'none';
    document.getElementById("spongy").style.display = 'block';
    document.getElementById("finalSponge").style.display = 'none';
    document.getElementById("finalSquid").style.display = 'none';
    document.getElementById("finalKrab").style.display = 'none';
    document.getElementById("next").onclick = showQuestion3;
    document.getElementById("before").onclick = showQuestion1;
}
function showQuestion3 () {
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'none';
    document.getElementById("third").style.display = 'block';
    document.getElementById("fourth").style.display = 'none';
    document.getElementById("fifth").style.display = 'none';
    document.getElementById("everyone").style.display = 'none';
    document.getElementById("patriki").style.display = 'block';
    document.getElementById("finalSponge").style.display = 'none';
    document.getElementById("finalSquid").style.display = 'none';
    document.getElementById("finalKrab").style.display = 'none';
    document.getElementById("next").onclick = showQuestion4;
    document.getElementById("before").onclick = showQuestion2;
}
function showQuestion4 () {
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'none';
    document.getElementById("third").style.display = 'none';
    document.getElementById("fourth").style.display = 'block';
    document.getElementById("fifth").style.display = 'none';
    document.getElementById("everyone").style.display = 'none';
    document.getElementById("squidi").style.display = 'block';
    document.getElementById("finalSponge").style.display = 'none';
    document.getElementById("finalSquid").style.display = 'none';
    document.getElementById("finalKrab").style.display = 'none';
    document.getElementById("next").onclick = showQuestion5;
    document.getElementById("before").onclick = showQuestion3;
}
function showQuestion5 () {
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'none';
    document.getElementById("third").style.display = 'none';
    document.getElementById("fourth").style.display = 'none';
    document.getElementById("everyone").style.display = 'none';
    document.getElementById("fifth").style.display = 'block';
    document.getElementById("planky").style.display = 'block';
    document.getElementById("finalSponge").style.display = 'none';
    document.getElementById("finalSquid").style.display = 'none';
    document.getElementById("finalKrab").style.display = 'none';
    document.getElementById("before").onclick = showQuestion4;
}

function saveAnswerSpongebob () {
    Spongebob+=1;
    console.log ("Spongebob" + Spongebob);
}
function saveAnswerSquidward () {
    Squidward+=1;
    console.log ("Squidward" + Squidward);
}
function saveAnswerMrKrab () {
    MrKrab+=1;
    console.log ("MrKrab" + MrKrab);
}

function resultQuestion () {
    if (Spongebob > Squidward && Spongebob > MrKrab) {
        console.log("you are Spongebob");
        document.getElementById("finalSponge").style.display = 'block';
    } else if (Squidward > Spongebob && Squidward > MrKrab) {
        console.log("you are Squidward");
        document.getElementById("finalSquid").style.display = 'block';
    } else if (MrKrab > Spongebob && MrKrab > Squidward) {
        console.log("you are MrKrab");
        document.getElementById("finalKrab").style.display = 'block';
    } else if (Spongebob == Squidward && Spongebob != MrKrab) {
        console.log("you are Spongebob and Squidward");
        document.getElementById("finalSponsquid").style.display = 'block';
    } else if (Spongebob == MrKrab && Spongebob != Squidward) {
        console.log("you are Spongebob and MrKrab");
        document.getElementById("finalKrabspon").style.display = 'block';
    } else if (Squidward == MrKrab && Squidward != Spongebob) {
        console.log("you are Squidward and MrKrab");
        document.getElementById("finalKrabsquid").style.display = 'block';
    }
    
    // Common code for hiding elements
    document.getElementById("title").style.display = 'none';
    for (var i = 0; i < questions.length; i++) {
        questions[i].style.display = 'none';
    }
    for (var j = 0; j < menus.length; j++) {
        menus[j].style.display = 'none';
    }
    for (var k = 0; k < buttons.length; k++) {
        buttons[k].style.display = 'none';
    }
}


