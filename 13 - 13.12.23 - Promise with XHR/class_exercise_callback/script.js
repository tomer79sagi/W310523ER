
// Prints a name somewhere
// 'somewhere' = callback function
// -------
// 'name' = name to print
// 'whereFunction' = a callback function, i.e. a pointer to a function code in memory
function displayName(name, whereFunction) {
    whereFunction(name);
}


// display functions
function displayToAlert(name) {
    alert(name);
}

function displayToConsole(name) {
    console.log(name);
}

function displayToHTML(name) {
    document.getElementById('output').innerHTML = name;
}

function displayToFile(name) {
    //...
}

function clicked() {
    alert('clicked');
}

// Old school
displayToAlert('Tomer');
displayToConsole('Tomer');
displayToHTML('Tomer');

// Modern and flexible, using callback
displayName('Tomer', displayToAlert);
displayName('Tomer', displayToConsole);
displayName('Tomer', displayToHTML);
displayName('Tomer', displayToFile);

// EVENTS use callback functions
// Eventlistener for click events
document.getElementById('output').addEventListener('click', clicked);

// Using XMLHttpRequest
const xhr = new XMLHttpRequest();
xhr.onload = clicked;

// Using asynchronous code - setTimeout
setTimeout(clicked, 3000);
