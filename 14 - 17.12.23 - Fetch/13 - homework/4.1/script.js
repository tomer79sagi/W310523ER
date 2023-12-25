function getFromServer(apiEndpoint) {
    let myPromise = new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://jsonplaceholder.typicode.com/${apiEndpoint}`);
      
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

    return myPromise;
}


async function main() {
    let div = document.getElementById("output");
    div.innerHTML = await getFromServer('users');
    
    let commentsDiv = document.getElementById('comments');
    commentsDiv.innerHTML = await getFromServer('comments');
}

main();