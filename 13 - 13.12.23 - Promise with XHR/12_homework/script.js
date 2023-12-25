function getData(countryName) {
    const myPromise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onload = () => {
            // Check if the response is valid and OK
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        };
    
        xhr.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
        xhr.send();
    });

    return myPromise;
}

function printData() {
    const cName = prompt('Please enter a country name');
    const p = getData(cName); // 'p' --> object of class Promise

    p.then((data) => {
        console.log(JSON.parse(data));
    });
}

function setImages() {
    const flagSources = [];
    let inputName;
    let counter = 5;

    // 1. Get country names into an array
    for (counter=0 ; counter<5 ; counter++) {
        inputName = prompt(`Please enter country name ${i}`);
        flagSources.push(inputName);
    }

    // 2. Make API calls to get image sources and construct URLs
    let imgHTML = '';
    for (counter=0 ; counter<5 ; counter++) {
        imgHTML += `
            <div>
                <img src="${flagsSources[counter]}"/>
            </div>
        `;
    }

    // 3. Append the new img src to the 
}

document.getElementById('btnLoad').addEventListener('click', printData);

// const myPromise = getData('Israel');
// myPromise
//     .then((data) => console.log(data))
//     .catch(error => alert(error));

