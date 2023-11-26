function myDisplayer(text) {
    document.getElementById('demo').innerHTML = text;
}

// 'printer' is a callback function
function myCalculator(num1, num2, printer) {
    const sum = num1 + num2;
    printer(sum); // Invoke callback function
}

myCalculator(5, 5, myDisplayer);
// myCalculator(5, 5, myDisplayer2);
// myCalculator(5, 5, myDisplayer3);
// myCalculator(5, 5, myDisplayer4);
