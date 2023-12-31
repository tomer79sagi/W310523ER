import User from "./user_model.js";

async function eventHandler() {
    const userObj = new User();
    
    // console.log(await userObj.getUsers());

    const divObj = document.getElementById('output');
    divObj.innerHTML = await userObj.getUsersAsHTML();
}

document.getElementById('btnStart').addEventListener('click', eventHandler);
