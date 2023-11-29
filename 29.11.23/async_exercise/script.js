// Secure coding
// Making sure no-one can execute the function, except for the 
// specific needs in the code

// ---------- 1
// Anonymous function
setTimeout(function() {
    const name = prompt('Enter your name');
    document.getElementById("output").innerHTML = name;
}, 3000); // Milli-seconds => 3 seconds


// ---------- 2
// Arrow function
setTimeout(() => {
    const name = prompt('Enter your name');
    document.getElementById("output").innerHTML = name;
}, 3000); // Milli-seconds => 3 seconds