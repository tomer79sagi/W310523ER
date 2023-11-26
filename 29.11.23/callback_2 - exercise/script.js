function alertName() {
    alert('Tomer Sagi');
}

const documentWriteName = function() {
    document.body.innerHTML = 'Tomer Sagi';
}

// 'callback' is a variable that poitns to a function
function printName(myFunction) {
    alert('Displaying my name');
    // console.log(callback); // Prints the CONTENT of the function, the code. DOESN'T invoke it!
    myFunction(); // Invokes the variable as a function
}

printName(alertName); // 1. Alert 'Displaying my name'. (2) Alert 'Tomer Sagi'
printName(documentWriteName); // 1. Alert 'Displaying my name. (2) document.write 'Tomer Sagi'