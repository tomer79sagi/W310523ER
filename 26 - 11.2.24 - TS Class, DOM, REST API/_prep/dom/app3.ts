const first_num3 = document.getElementById("first-num")! as HTMLInputElement;
const second_num3 = document.getElementById("second-num")! as HTMLInputElement;
const btn3 = document.getElementById("btn") as HTMLButtonElement;
const result3 = document.getElementById("result") as HTMLDivElement;

const sum3 = (first: number, second: number): void => {
    result3.innerHTML = `${first + second}`;
}

btn3?.addEventListener("click", () => sum3(parseInt(first_num3.value), parseInt(second_num3.value)));