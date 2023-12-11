function myDisplayer(some) {
    document.getElementById('demo').innerHTML = some;
}

function myCalculator(num1, num2) {
    const sum = num1 + num2;
    myDisplayer(sum);
}

myCalculator(5,5);
