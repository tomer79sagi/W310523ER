
interface IPost {
  id: number,
  title: string,
  body: string,
  userId: number
};

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

async function putData(postObj: IPost) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postObj.id}`, {
    method: 'PUT',
    body: JSON.stringify(postObj),
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
function updateUI(data: any): void {
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

  document.getElementById('output')!.innerHTML = `<table>${htmlContent}</table>`;
}

// -- CONTROL --
async function apiGET() {
  // 1. Get list of posts from server - GET
  let data = await getData();
  updateUI(data);
}

async function apiPOST() {
  // 2. Create new post on server - POST
  const response = await postData();
  if (response.id)
    alert(`Successfully created a new Post object. New ID is ${response.id}.`);
}

async function apiPUT() {
  const newPost = {
    id: 19,
    title: 'New Post',
    body: 'This is a new post!',
    userId: 1,
  };

  const response = await putData(newPost);
  if (response.id)
    alert(`Successfully updated Post with ID ${response.id}.`);
}

async function apiDELETE() {
}

document.getElementById('btnGet')?.addEventListener('click', apiGET);
document.getElementById('btnPost')?.addEventListener('click', apiPOST);
document.getElementById('btnPut')?.addEventListener('click', apiPUT);
document.getElementById('btnDelete')?.addEventListener('click', apiDELETE);