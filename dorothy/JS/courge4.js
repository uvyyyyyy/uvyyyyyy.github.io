
function attackDragon(){
    var girl = document.getElementById("girl");
    girl.style.background= "url('../dorothy/images/walk.png')";
    girl.style.animation = "walkSpriteAnimation 4s steps(16) forwards";
    girl.style.left = '600px'; 
    girl.style.top = '420px';
    
        var frameIndex = 1;
        var walkAnimationInterval = setInterval(function() {
            frameIndex++;
            if (frameIndex > 20) {
                clearInterval(walkAnimationInterval); 
                girl.style.background = "url('../dorothy/images/dorothyIdle.png')"; 
                girl.style.animation = "sprite-animation 2s steps(16) infinite"; 
            } else {
                girl.style.background = "url('../dorothy/images/walk.png')"; 
            }
        }, 100);     
}
function dragonAttack(){
    var dragon = document.getElementById("dragon");
    dragon.style.background= "url('../dorothy/images/dragonRun4.png')";
    dragon.style.animation = "dragonWalkSpriteAnimation 1s steps(8) forwards";
    dragon.style.left = '450px'; 
    dragon.style.top = '200px';
    
        var frameIndex = 1;
        var dragonWalkSpriteAnimationInterval = setInterval(function() {
            frameIndex++;
            if (frameIndex > 20) {
                clearInterval(dragonWalkSpriteAnimationInterval); 
                dragon.style.background = "url('../dorothy/images/dragonIdle4.png')"; 
                dragon.style.animation = "sprite-animation 1s steps(8) infinite"; 
            } else {
                dragon.style.background = "url('../dorothy/images/dragonRun4.png')"; 
            }
        }, 100);
        document.getElementById('buttons').classList.add("buttonsAnim");
}
function killDragon(){
    var dragon = document.getElementById("dragon");
    dragon.style.background= "url('../dorothy/images/dragonDead4.png')";
    dragon.style.animation = "dragonDeadSpriteAnimation 1s steps(8) forwards";
    document.getElementById('sword').classList.add("swordAnim");
    document.getElementById('moveRight').classList.add("moveAnimation");
    document.getElementById('corageIcon').classList.add("startMoveImageAnimation");
    document.getElementById('ending').classList.add("endingAnimation");
    var audio = document.getElementById('buttonSound');
    audio.play();
}
function nextPage(){
    var girl = document.getElementById("girl");
    girl.style.background= "url('../dorothy/images/walk.png')";
    girl.style.animation = "walkSpriteAnimation 4s steps(16) forwards";
    girl.style.left = '1500px'; 
    girl.style.top = '420px';
    var audio = document.getElementById('buttonSound1');
    audio.play();
    setTimeout(function() {
        window.location.href = 'https://orinaveh67.github.io/finalProject/part1/prac8.html';
    }, 2000);
}


