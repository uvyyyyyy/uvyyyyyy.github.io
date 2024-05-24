function playAudio() {
    const audio = document.getElementById('background-audio');
    audio.play().catch(function(error) {
        console.error('Error playing audio:', error);
    });
    document.getElementById('moveRight').classList.add("moveAnimation");
    document.getElementById('buttons').classList.add("buttonsAnim");

}
function takeSword(){
    var girl = document.getElementById("girl");
    girl.style.background= "url('../dorothy/images/walk.png')";
    girl.style.animation = "walkSpriteAnimation 4s steps(16) forwards";
    girl.style.left = '600px'; 
    girl.style.top = '320px';
    
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
        var moveRightDiv = document.querySelector('.moveRight');
        moveRightDiv.style.display = 'none';
        document.getElementById('buttonsOut').classList.add("buttonsOutAnim");
}
function outSword(){
    document.getElementById('rock').classList.add("rockAnim");
    document.getElementById('sword').classList.add("rockAnim");
    var rockSwordDiv = document.querySelector('.rockSword');
    rockSwordDiv.style.display = 'none';
    document.getElementById('ending').classList.add("endingAnimation");
    setTimeout(function() {
        var moveLeftDiv = document.querySelector('.moveLeft');
        moveLeftDiv.classList.add('startMoveLeftAnimation');
    }, 3000);

}
function nextPage (){
    var girl = document.getElementById("girl");
    girl.style.background= "url('../dorothy/images/walk.png')";
    girl.style.animation = "walkSpriteAnimation 4s steps(16) forwards";
    girl.style.left = '1500px'; 
    girl.style.top = '320px';

    var moveLeftDiv = document.querySelector('.moveLeft');
    moveLeftDiv.style.display = 'none';
    var swordDiv = document.querySelector('.sword');
    swordDiv.style.display = 'none';
    var audio = document.getElementById('buttonSound1');
    audio.play();
    setTimeout(function() {
        window.location.href = '../dorothy/courge4.html';
    }, 2000);
}
