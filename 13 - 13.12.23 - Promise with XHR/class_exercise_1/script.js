function randomNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random();
            resolve(randomNumber);
        }, 3000);
    });
}

async function main() {
    // -- Option 1 without Promise or any asynchornous code
    // Code runs from start to finish and DOESN'T WAIT for the resolve() to execute
    // const randomNum = randomNumber(); // This is a asynchornous function and we want to wait here until the Promise is resolved
    // document.getElementById('output').innerHTML = randomNum;

    // -- Option 2 with Promise + .then() --> works but messy
    // const p = randomNumber();
    // p.then(data => document.getElementById('output').innerHTML = data); // This is a asynchornous function and we want to wait here until the Promise is resolved

    // -- Option 3 with Promise + async/await --> clean code, clear, perfect!
    const randomNum = await randomNumber(); // This is a asynchornous function and we want to wait here until the Promise is resolved
    document.getElementById('output').innerHTML = randomNum;
}

main();