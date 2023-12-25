// -- MODEL --
// Function that retrieves data from server
const getUsersFromServer = async () => {
    myPromise = new Promise((resolve, reject) => {
        // Inside this function, you perform the asynchronous operation.
        // In the case of XHR, you would make the HTTP request here.
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
      
        xhr.onload = () => {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText)); // Resolve with the response data.
          } else {
            reject('Error: Unable to fetch data'); // Reject with an error message.
          }
        };
      
        xhr.onerror = () => {
          reject('Network error'); // Reject if there's a network error.
        };
      
        xhr.send();
    });

    let value;
    await myPromise
      // 2. Update UI
      .then(data => value = data)
      
      // 3. Update UI
      .catch(error => alert(`Error: ${error}`));

    return value;
}

// -- VIEW --
// פונקציה שמקבלת מערך של אובייקטים של משתמשים ומייצרת טבלה להציג אותם
// Function that recieves array of JS objects and creates a table with the information
const createTableFromUsers = (usersObj) => {
    let usersHTML = ``;

    // Create all <TR>s for all users
    for (let user of usersObj) {
        usersHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
            </tr>
        `;
    }

    // 1. Add titles to the userHTML
    // 2. Add to DOM
    document.getElementById('myTable').innerHTML = usersHTML;
}

// -- CONTROLLER -- מתכלל הפעולות בתוכנה
const displayUsers = async () => {

    const arrUsers = await getUsersFromServer();

     createTableFromUsers(arrUsers);
}

// נחבר את אירוע הלחיצה לפונקציית קבלת המידע מהשרת
document.getElementById('btnLoad').addEventListener('click', displayUsers);