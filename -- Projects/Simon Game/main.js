let arrRound = [];
let gameCounter; // Game counter
let userCounter;

// Function (A)
function initGame() {
    console.clear();
    gameCounter = userCounter = 1;
    arrRound = [];
    console.log('Game initiated...');
}

function eventHandler() {
    initGame();
}

document.getElementById('btnStart').addEventListener('click', eventHandler);
