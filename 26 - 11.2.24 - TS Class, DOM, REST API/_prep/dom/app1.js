"use strict";
const first_num = document.getElementById("first-num");
const second_num = document.getElementById("second-num");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
const sum = (first, second) => {
    result3.innerHTML = `${first + second}`;
};
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => sum(first_num.value, second_num.value));
