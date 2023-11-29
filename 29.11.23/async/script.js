function myFunction() {
    document.getElementById("output").innerHTML += "I love Chicago Bulls.<br/>";
    console.log(`I love Chicago Bulls.\nYeah`);
}

// 1. Delay execution
// 2. Run in parallel (במקביל)
// setTimeout(myFunction, 3000); // Milli-seconds => 3 seconds

// Repeat indefinitly
setInterval(myFunction, 3000); // Milli-seconds => 3 seconds

console.log('Hello...');