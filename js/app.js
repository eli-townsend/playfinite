var MYAUDIO = (function(){
  
    var startTime;
    var endTime;
    //var songLength = document.getElementById("testPlayer");
    //testPlayer.duration;
  
    var intervalValue,
        audioControl,       //audio object
        loopingObject,      //setInterval variable so it can be cleared out
        paused;             //true or false
 
    var play = function(){
        audioControl.currentTime = startTime;
        audioControl.play();
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
    setValues = function()
    {
        startTime = parseFloat($("#startLine").val());
        endTime = parseFloat($("#finishLine").val());
        intervalValue = (endTime - startTime) * 1000;
    },
    update = function(){
        setValues();
        clearInterval(loopingObject);
        play();
        loop();
    },
    init = function(){
        setValues();
        console.log(startTime);
        console.log(endTime);
       
        audioControl = document.getElementById("testPlayer");
        play();
        loop();
    };
  
    return {
        init: init,
        update: update,
        pause: pause,
        continuePlaying: continuePlaying
    }
  
}());
 
$("document").ready(function(){
 
    $(document).foundation();
    MYAUDIO.init();
     
      //Add Events
      $('.slider').on('moved.zf.slider', function(){
          MYAUDIO.update();
      });
         
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
