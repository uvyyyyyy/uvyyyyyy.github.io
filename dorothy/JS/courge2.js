function buildBridge (){
        var girl = document.getElementById("girl");
        girl.style.background= "url('../dorothy/images/walk.png')";
        girl.style.animation = "walkSpriteAnimation 2s steps(16) forwards";
        girl.style.left = '310px'; 
        girl.style.top = '460px';
    
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
        document.getElementById('build').classList.add("buildAnimation");
    }
    function build(){
        var divElements = document.querySelectorAll('.log, .log2, .log3');
        divElements.forEach(function(element) {
            element.style.opacity = 1;
        var audio = document.getElementById('buttonSound2');
            audio.play();
        });
        var girl = document.getElementById("girl");
        girl.style.background= "url('../dorothy/images/walk.png')";
        girl.style.animation = "walkSpriteAnimation 2s steps(16) forwards";
        girl.style.left = '900px'; 
        girl.style.top =  '300px';
    
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
        setTimeout(function() {
        var moveLeftDiv = document.querySelector('.moveLeft');
        moveLeftDiv.classList.add('startMoveLeftAnimation');
    }, 4000);
    setTimeout(function() {
        var moveLeftDiv = document.querySelector('.moveImage');
        moveLeftDiv.classList.add('startMoveImageAnimation');
    }, 4000);
    document.getElementById('ending').classList.add("endingAnimation");

    }
    function nextPage (){
        var girl = document.getElementById("girl");
        girl.style.background= "url('../dorothy/images/walk.png')";
        girl.style.animation = "walkSpriteAnimation 4s steps(16) forwards";
        girl.style.left = '1500px'; 
        girl.style.top = '300px';
    
        var divElements = document.querySelectorAll('.moveLeft, .moveImage');
        divElements.forEach(function(element) {
            element.style.opacity = 0;
        });
        var audio = document.getElementById('buttonSound1');
    audio.play();
        setTimeout(function() {
            window.location.href = '../dorothy/courge3.html';
        }, 2000);
    
    }

  

 