// -- MODEL --
// Function that retrieves data from server
const getUsersFromServer = () => {
    const xhr = new XMLHttpRequest(); // new instance of class 'XMLHttpReqeust'

    // When a 'completed' request was called and a 'completed' response was sent back
    // Here we will handle both successful server actions and unsuccessful server actions
    xhr.onload = () => {
        // JSON.parse() --> Convert JSON text to Javascript object
        usersObj = JSON.parse(xhr.responseText);
        let usersHTML = '';

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

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users'); // == READ, Type: 'xhr' in 'Netowrk' tab in 'F12 - Developer Tools'
    xhr.send();
}

// -- VIEW --
// פונקציה שמקבלת מערך של אובייקטים של משתמשים ומייצרת טבלה להציג אותם
// Function that recieves array of JS objects and creates a table with the information
const createTableFromUsers = (arrUsers) => {

}

// -- CONTROLLER -- מתכלל הפעולות בתוכנה
const displayUsers = () => {
    // 1. Call server
    const arrUsers = getUsersFromServer();

    // 2. Update UI
    createTableFromUsers(arrUsers);
}

// נחבר את אירוע הלחיצה לפונקציית קבלת המידע מהשרת
document.getElementById('btnLoad').addEventListener('click', displayUsers);