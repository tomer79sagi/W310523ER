export const name = 'Tomer Sagi';
const age = 44;

export function printArray(arr) {
  for (let i=0 ; i<arr.length ; i++) {
    document.getElementById('output').innerHTML += `${i}. ${arr[i]}<br/>`;
  }
}