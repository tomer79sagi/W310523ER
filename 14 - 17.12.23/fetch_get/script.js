// -- MODEL --
// 1. Makes call to server
// 2. Returns a Promise object
async function getData() {

  // 1. 1st option, using async/await
  let response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (response.ok) { // if HTTP status is within the range of 200 and 299
    return response.json(); // Similar to JSON.parse();
  }

  // 2. 2nd option, similar to Promise with .then() and .catch()
  // fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(data => {
  //     // ... Scope
  //   })
  //   .catch();
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
async function main() {
  const data = await getData();
  updateUI(data);
}

main(); 