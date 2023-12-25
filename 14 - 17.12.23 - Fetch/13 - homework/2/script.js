let div = document.getElementById("div");


function randomNumber(num) {
    let myPromise = new Promise((resolve, reject) => {

        setTimeout(() => {
            let randomNumber = Math.floor(Math.random() * num);
            console.log(`random number from settimeout ${randomNumber}`);
            resolve(randomNumber)
        }, 1000);

    });

    return myPromise;
}


async function main() {
    let num = prompt(`enter number`)
    div.innerHTML = await randomNumber(num)
}

main()