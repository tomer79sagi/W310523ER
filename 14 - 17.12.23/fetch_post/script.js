// -- MODEL --
// 1. Makes call to server
// 2. Returns a Promise object
async function getData() {

  // 1. 1st option, using async/await
  let response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (response.ok) { // if HTTP status is within the range of 200 and 299
    return response.json(); // Similar to JSON.parse();
  }
}

async function postData() {
  const myPost = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };

  // 1. 1st option, using async/await
  let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(myPost),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (response.ok) { // if HTTP status is within the range of 200 and 299
    return response.json(); // Similar to JSON.parse();
  }
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
  // 1. Get list of posts from server - GET
  let data = await getData();
  updateUI(data);

  // 2. Create new post on server - POST
  data = await postData();
  alert(data);
}

main(); 