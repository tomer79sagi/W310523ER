
async function getNumber() {
  
  // PRODUCING CODE (new Promise(function()))
  // -- resolve, reject
  try {
    const myPromise = await new Promise((resolve, reject) => {
        // Inside this function, you perform thSe asynchronous operation.
        // In the case of XHR, you would make the HTTP request here.
        setTimeout(() => {
          const myNum = Math.random();
          if (myNum > 0.5) {
            resolve(myNum);
          } else {
            reject(`Failed, number less than 0.5: ${myNum}`);
          }
        }, 2000);
      });
  
    console.log(myPromise);
  } catch(data) {
    console.log(data);
  }

  // // CONSUMING CODE (then..catch | async..await)    
  // myPromise.then((data) => {
  //   document.getElementById('app').innerHTML = `${data}: Success`;
  //     }).catch((error) => {
  //       document.getElementById('app').innerHTML = `${error}: Error`;
  //     });
}

document.getElementById('start').addEventListener('click', getNumber);