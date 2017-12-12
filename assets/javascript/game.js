var currentNumber;
var playerScore = 0;

var winCounter = 0;
var lossCounter = 0;

var greenCrystal;
var yellowCrystal;
var redCrystal;
var blueCrystal;

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function startGame() {
    $("#losses").html(lossCounter);
    $("#wins").html(winCounter);
    playerScore = 0;
    currentNumber = randomIntFromInterval(19,120);
    $("#red").val(randomIntFromInterval(1,12));
    $("#blue").val(randomIntFromInterval(1,12));
    $("#yellow").val(randomIntFromInterval(1,12));
    $("#green").val(randomIntFromInterval(1,12));
    $("#player-score").html(playerScore);
    $("#current-number").html(currentNumber);
}
startGame();

function turnComplete() {
    $("#player-score").html(playerScore);
    if (currentNumber === playerScore) {
        winCounter++;
        $("#winner-loser").html("You won!!");
        console.log(winCounter);
        startGame();
    }
    else if (currentNumber < playerScore) {
        lossCounter--;
        $("#winner-loser").html("You lost!!");        
        console.log(lossCounter);
        startGame();
    }
}


$(".crystals").on("click", function(){
    var number = $(this).val();
    playerScore += parseInt(number);
    console.log(playerScore);
    turnComplete();
})