const first_num = document.getElementById("first-num");
const second_num = document.getElementById("second-num");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

const sum = (first: number, second: number): void => {
    result3.innerHTML = `${first + second}`;
}

btn?.addEventListener("click", () => sum(first_num.value, second_num.value))