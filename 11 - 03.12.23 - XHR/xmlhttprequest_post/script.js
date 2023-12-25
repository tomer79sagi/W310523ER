function createNewPost() {
    const xhr = new XMLHttpRequest(); // new instance of class 'XMLHttpReqeust'

    // 1. Convert JS object to JSON text so we can 'SEND' to the server
    const jsonData = JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    });

    // 2. Use the POST method
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");

    // 3. Set request headers
    xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");

    // 4. Incldue the 'jsonData' in the 'send()' method
    xhr.send(jsonData);
}


function getSingleUser() {
    const xhr = new XMLHttpRequest(); // new instance of class 'XMLHttpReqeust'

    xhr.onload = () => {
        // JSON.parse() --> Convert JSON text to Javascript object
        const userObj = JSON.parse(xhr.responseText);S

        // Iterate / loop over all attributes in the 'responseObj'
        for (let prop in userObj) {
            document.getElementById("jsObj").innerHTML += `
                <div>
                    <b>${prop}</b>: ${userObj[prop]}
                </div>
            `;
        }
    }

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1'); // == READ, Type: 'xhr' in 'Netowrk' tab in 'F12 - Developer Tools'
    xhr.send();
}

createNewPost();