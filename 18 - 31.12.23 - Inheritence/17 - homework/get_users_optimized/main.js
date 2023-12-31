import User from "./user_model.js";

async function eventHandler() {
    const divObj = document.getElementById('output');
    divObj.innerHTML = await User.getUsersAsHTML();
}

document.getElementById('btnStart').addEventListener('click', eventHandler);
