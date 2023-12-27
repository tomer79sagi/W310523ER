import Timer from "./timer.js";

function eventHandler() {
    const tIsrael = new Timer(0);
    const tEST = new Timer(-8);
    const tUK = new Timer(-2);

    tIsrael.displayTimerInDiv('clock1');
    tEST.displayTimerInDiv('clock2');
    tUK.displayTimerInDiv('clock3');
}

document.getElementById('btnStart').addEventListener('click', eventHandler);
