var MYAUDIO = (function(){
   
    var startTime = 7,
        endTime = 13,
        intervalValue = (endTime - startTime) * 1000,
        audioControl,       //audio object
        loopingObject,      //setInterval variable so it can be cleared out
        paused;             //true or false
   
    var play = function(){
        audioControl.currentTime = startTime;
        audioControl.play();
        console.log(audioControl.currentTime);
    },
    loop = function(){
        loopingObject = setInterval(play, intervalValue) ;
    },
    pause = function(){
        paused = true;
        audioControl.pause();
        console.log(loopingObject);
        clearInterval(loopingObject);
    },
    continuePlaying = function(){
        var timeLeft = (endTime - audioControl.currentTime) * 1000;
       
        //Continue playing
        audioControl.play();
 
        //Start looping again after remaining time
        setTimeout(function(){
            audioControl.currentTime = startTime;
            init();
        }, timeLeft);
    },
    init = function(){
        audioControl = document.getElementById("testPlayer");
        play();
        loop();
    };
   
    return {
        init: init,
        pause: pause,
        continuePlaying: continuePlaying
    }
   
}());
 
$("document").ready(function(){
    MYAUDIO.init();
   
    $("#pause").on("click", function(){
        MYAUDIO.pause();
        $("#pause").hide();
        $("#start").show();
    });
   
    $("#start").on("click", function(){
        MYAUDIO.continuePlaying();
        $("#start").hide();
        $("#pause").show();
    });
});


//Foundation JavaScript
$(document).foundation();