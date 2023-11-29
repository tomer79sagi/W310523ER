let myInterval;

function myFunction() {
    document.getElementById("output").innerHTML += "I love Chicago Bulls.<br/>";
}

function startTimer() {
    myInterval = setInterval(myFunction, 2000);
}

function stopTimer() {
    clearInterval(myInterval);
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);