function getName() {
  const myPromise = new Promise((resolve, reject) => {
      // Inside this function, you perform thSe asynchronous operation.
      // In the case of XHR, you would make the HTTP request here.
      setTimeout(() => {
        const name = prompt('Please enter your name');

        if (name === '-1') {
          reject(name);
        } else {
          resolve(name);
        }
      }, 2000);
    });

  const successFunc = (data) => {
    alert(`${data}: Success`);
  }

  const errorFunc = (error) => {
    alert(`${error}: Error`);
  }

  myPromise.then(successFunc).catch(errorFunc);
}

document.getElementById('start').addEventListener('click', getName);