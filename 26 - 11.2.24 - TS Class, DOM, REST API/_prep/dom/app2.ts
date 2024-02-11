const first_num2 = document.getElementById("first-num")!;
const second_num2 = document.getElementById("second-num")!;
const btn2 = document.getElementById("btn");
const result2 = document.getElementById("result");

const sum2 = (first: number, second: number): void => {
    result3.innerHTML = `${first + second}`;
}

btn2?.addEventListener("click", () => sum2(first_num2.value, second_num2.value))