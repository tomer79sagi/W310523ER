const name = 'Tomer Sagi';
const age = 44;

function printArray(arr) {
  for (let i=0 ; i<arr.length ; i++) {
    document.getElementById('output').innerHTML += `${i}. ${arr[i]}<br/>`;
  }
}

export { 
  name,
  printArray 
};