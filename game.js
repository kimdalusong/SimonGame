var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];


function nextSequence(){
    
    randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
 
        $("#" + randomChosenColour).addClass("pressed");
        setTimeout(function() {
        $("#" + randomChosenColour).removeClass("pressed");
        }, 200);

};


/**
 * 
 * function makeSound(randomChosenColour) {
    switch (randomChosenColour) {
        case "green" :
            var green = new audio ('sounds/green.mp3');
            green.play();
            animation();
            break;
        
        case "blue" :
                var blue = new audio ('sounds/blue.mp3');
                blue.play();
                animation();
                break;

                case "red" :
                    var red = new audio ('sounds/red.mp3');
                    red.play();
                    animation();
                    break;

                    case "yellow" :
                        var yellow = new audio ('sounds/yellow.mp3');
                        yellow.play();
                        animation();
                        break;
        default :
        var wrong = new audio ('sounds/wrong.mp3');
                        wrong.play();
    }

}; 
 */
