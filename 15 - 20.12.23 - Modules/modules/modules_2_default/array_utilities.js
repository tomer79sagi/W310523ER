export const name = 'Tomer Sagi';
const age = 44;

// Expects a JS Array, iterates over it and prints every element to a DIV using 'innerHTML'
function printArray(arr) {
  for (let i=0 ; i<arr.length ; i++) {
    document.getElementById('output').innerHTML += `${i}. ${arr[i]}<br/>`;
  }
}

export default printArray;