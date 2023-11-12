const obj = {
  toString: function () {
    return "aaa";
  },
};

console.log(obj.toString);
console.log(obj.toString());

console.log(String(obj));
// obj.toString() => string

const secondsInAYear = 365 * 24 * 60 * 60;
