let total;
let num1;
let num2;

num1 = window.prompt('Enter a Number');
num2 = window.prompt('Enter another Number');
total = divide(num1, num2);
console.log('The Total Divide is:', total);

function divide(num1, num2) {
    // Risky code
    let calc;

    try {
        calc = num1/num2;
    } catch (err) {
        console.log(err.message);
        calc = -1;
    } finally {
        console.log("End of processing");
    }

    return calc;
}