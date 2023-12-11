
// Get players
function getPlayers() {
    // 1. Create the XMLHttpRequest object
    const xhr = new XMLHttpRequest(); // new instance of class 'XMLHttpReqeust'

    // 2. Define the successful response function
    // Make sure to handle the most common ones, 200, 201, 204
    xhr.onload = () => {
        // JSON.parse() --> Convert JSON text to Javascript object
        const data = JSON.parse(xhr.responseText);

        // Iterate / loop over all attributes in the 'responseObj'
        document.getElementById("app").innerHTML = data;
    }

    // 3. Define the error response function
    // Make sure to handle at least the most common ones, 401, 403, 404, 500
    xhr.onerror = () => {} // Handling errors
    
    // 4. Define the abort response function
    xhr.onabort = () => {} // Handling aborted operations (if the operation takes a long time)
    
    // 5. Define the abort response function
    xhr.onprogress = () => {} // Handling period updates, e.g. updating a progress bar in the UI

    // 6. Define the GET parameters (ONLY RELEVANT TO GET REQUESTS)
    var params = "team=1&season=2023";
    
    // 7. Open the connection to the remote server
    xhr.open('GET', `https://api-nba-v1.p.rapidapi.com/players?${params}`); // == READ, Type: 'xhr' in 'Netowrk' tab in 'F12 - Developer Tools'
    
    // 8. Define specific headers to include in the REQUEST, e.g. authentication key
    xhr.setRequestHeader('X-RapidAPI-Key', 'r66M9SM0SFmshzf6c9KbVDBwXlgVp1pikIxjsn1HaQtduybhz2');
    xhr.setRequestHeader('X-RapidAPI-Host', 'api-nba-v1.p.rapidapi.com');
    
    // 9. Make the call to the server
    xhr.send();
}

// 10. Attach the function that calls the server to an event in the UI
document.getElementById('getPlayers').addEventListener('click', getPlayers);