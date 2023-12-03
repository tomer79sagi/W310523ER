const xhr = new XMLHttpRequest(); // new instance of class 'XMLHttpReqeust'

xhr.onload = () => {
    // Convert JSON text to JS object
    const responseObj = JSON.parse(xhr.responseText);
    document.getElementById("jsObj").innerHTML = responseObj[0].name;

    // Display raw JSON text
    document.getElementById("output").innerHTML = xhr.responseText;
}

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users'); // == READ, Type: 'xhr' in 'Netowrk' tab in 'F12 - Developer Tools'
xhr.send();


const jsonText = `
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"
    }
`;

const jsObject = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
};





// xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments'); // == READ, Type: 'xhr' in 'Netowrk' tab in 'F12 - Developer Tools'
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts'); // == READ, Type: 'xhr' in 'Netowrk' tab in 'F12 - Developer Tools'

// Big NO NOs
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/get_posts'); // == READ, Type: 'xhr' in 'Netowrk' tab in 'F12 - Developer Tools'


// xhr.open('POST', 'https://jsonplaceholder.typicode.com/users'); // == CREATE
// xhr.open('PUT', 'https://jsonplaceholder.typicode.com/users'); // == UPDATE
// xhr.open('DELETE', 'https://jsonplaceholder.typicode.com/users'); // == DELETE