const xhr = new XMLHttpRequest(); // new instance of class 'XMLHttpReqeust'

xhr.onload = () => {
    document.getElementById("output").innerHTML = xhr.responseText;
}

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users'); // == READ, Type: 'xhr' in 'Netowrk' tab in 'F12 - Developer Tools'

// xhr.open('POST', 'https://jsonplaceholder.typicode.com/users'); // == CREATE
// xhr.open('PUT', 'https://jsonplaceholder.typicode.com/users'); // == UPDATE
// xhr.open('DELETE', 'https://jsonplaceholder.typicode.com/users'); // == DELETE

xhr.send();