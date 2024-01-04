// Selects element by class
var timeEl = document.querySelector("#clock");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 60;

function countdown() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            sendMessage();
        }

    }, 1000);
}

function start() {
    countdown();

}

function lose() {

}