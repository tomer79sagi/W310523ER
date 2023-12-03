const xhr = new XMLHttpRequest(); // new instance of class 'XMLHttpReqeust'

xhr.onload = () => {
    // JSON.parse() --> Convert JSON text to Javascript object
    const userObj = JSON.parse(xhr.responseText);

    // Iterate / loop over all attributes in the 'responseObj'
    // for ... in --> Objects
    // for ... of --> Arrays
    for (let prop in userObj) {
        // - Iteration 1: prop = 'id';
        // document.getElementById("jsObj").innerHTML += `${id}: ${userObj[id]}<br/>`; 
        
        // - Iteration 2: prop = 'name'
        // document.getElementById("jsObj").innerHTML += `${name}: ${userObj[name]}<br/>`; 
        
        // - Iteration 3: prop = 'email'
        // document.getElementById("jsObj").innerHTML += `${email}: ${userObj[email]}<br/>`;

        // - Iteration 4+: prop = 'name'....
        // ....


        // This is dynamic, how it MUST be
        //document.getElementById("jsObj").innerHTML += `${prop}: ${userObj[prop]}<br/>`;
        
        // Options to add new HTML tags
        // 1. Add to HTML using 'document.createElement()'
        // 2. Add to HTML using 'innerHTML'
        document.getElementById("jsObj").innerHTML += `
            <div>
                <b>${prop}</b>: ${userObj[prop]}
            </div>
        `;
    }
}

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1'); // == READ, Type: 'xhr' in 'Netowrk' tab in 'F12 - Developer Tools'
xhr.send();