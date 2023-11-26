function myDisplayer(some) {
    document.getElementById('demo').innerHTML = some;
}

function myCalculator(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

const result = myCalculator(5,5);
myDisplayer(result);