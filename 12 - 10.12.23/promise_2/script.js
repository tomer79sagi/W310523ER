const myPromise = new Promise((resolve, reject) => {
    // Inside this function, you perform the asynchronous operation.
    // In the case of XHR, you would make the HTTP request here.
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1', true);
  
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.responseText); // Resolve with the response data.
      } else {
        reject('Error: Unable to fetch data'); // Reject with an error message.
      }
    };
  
    xhr.onerror = () => {
      reject('Network error'); // Reject if there's a network error.
    };
  
    xhr.send();
  });

myPromise
  .then((data) => {
    // This function runs if the Promise is resolved successfully.
    console.log('Data received:', data);
  })
  .catch((error) => {
    // This function runs if the Promise is rejected with an error.
    console.error('Error:', error);
  });
  