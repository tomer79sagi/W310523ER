// function getNumber() {
//   setTimeout(() => {
//     const myNum = Math.random();
//     if (myNum > 0.5) {
//       document.getElementById('app').innerHTML = `${myNum}: Success`;
//     } else {
//       document.getElementById('app').innerHTML = `${myNum}: Error`;
//     }
//   }, 2000);
// };


// function getNumber() {
//   setTimeout(() => {
//     const myNum = Math.random();
//     if (myNum > 0.5) {
//       itWorked(myNum);
//     } else {
//       myError(myNum);
//     }
//   }, 2000);
// };

// function itWorked(myNum) {
//   document.getElementById('app').innerHTML = `${myNum}: Success`;
// }

// function myError(myNum) {
//   document.getElementById('app').innerHTML = `${myNum}: Error`;
// }

function getNumber() {
  const myPromise = new Promise((resolve, reject) => {
      // Inside this function, you perform thSe asynchronous operation.
      // In the case of XHR, you would make the HTTP request here.
      setTimeout(() => {
        const myNum = Math.random();
        if (myNum > 0.5) {
          resolve(myNum);
        } else {
          reject(myNum);
        }
      }, 2000);
    });

  myPromise.then((data) => {
    document.getElementById('app').innerHTML = `${data}: Success`;
      }).catch((error) => {
        document.getElementById('app').innerHTML = `${error}: Error`;
      });
}

document.getElementById('start').addEventListener('click', getNumber);