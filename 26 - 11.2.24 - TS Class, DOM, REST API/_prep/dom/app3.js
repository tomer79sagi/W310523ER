"use strict";
const first_num3 = document.getElementById("first-num");
const second_num3 = document.getElementById("second-num");
const btn3 = document.getElementById("btn");
const result3 = document.getElementById("result");
const sum3 = (first, second) => {
    result3.innerHTML = `${first + second}`;
};
btn3 === null || btn3 === void 0 ? void 0 : btn3.addEventListener("click", () => sum3(parseInt(first_num3.value), parseInt(second_num3.value)));
