"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// -- MODEL --
// 1. Makes call to server
// 2. Returns a Promise object
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        // 1. 1st option, using async/await
        let response = yield fetch('https://jsonplaceholder.typicode.com/posts');
        if (response.ok) { // if HTTP status is within the range of 200 and 299
            return response.json(); // Similar to JSON.parse();
        }
    });
}
function postData() {
    return __awaiter(this, void 0, void 0, function* () {
        const myPost = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        };
        // 1. 1st option, using async/await
        let response = yield fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(myPost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response.ok) { // if HTTP status is within the range of 200 and 299
            return response.json(); // Similar to JSON.parse();
        }
    });
}
// -- VIEW --
// Responsible for updating the UI with data
// אחראי על עדכון הממשק משתמש באמצעות דאטה שהוא מקבל כקלט לפונקציה
function updateUI(data) {
    // משתנה שישמור את התוכן של הטבלה שיתעדכן בכל איטרציה של הלולאה
    let htmlContent = '';
    // לולאה שעוברת על כל האיברים מהמערך שהתקבל מהתשובה של השרת
    for (let post of data) {
        htmlContent += `
      <tr>
        <td>${post.userId}</td>
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.body}</td>
      </tr>
    `;
    }
    document.getElementById('output').innerHTML = `<table>${htmlContent}</table>`;
}
// -- CONTROL --
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // 1. Get list of posts from server - GET
        let data = yield getData();
        updateUI(data);
        // 2. Create new post on server - POST
        data = yield postData();
        // alert(data);
    });
}
main();
