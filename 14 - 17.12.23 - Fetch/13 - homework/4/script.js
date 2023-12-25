function getUsers() {
    let myPromise = new Promise((resolve, reject) => {

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

    return myPromise;
}

function getComments() {
    let myPromise = new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments', true);
      
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
    div.innerHTML = await getUsers()
    
    let commentsDiv = document.getElementById('comments');
    commentsDiv.innerHTML = await getComments();
}

main()