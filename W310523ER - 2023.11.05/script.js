const obj = {
  color: "green",
  "the name of the users": "daniel",
  a: 4,
  b: 56,
  c: 45,
};

const game = {
  nickName: "Byte9Rulles",
  life: 100,
  xp: 0,
  year: 1948 + 75,
};

game.life = obj.a;

// Numbers operators

console.log(true + 5);
console.log(5 + false);
console.log(5 * true);
console.log(5 * false);
console.log(5 * "55");
console.log(5 * "55a55");
console.log(5 * "a55");
console.log(5 * null);
console.log(5 * undefined);

console.log({
  "this is a nice post on a day at the beach ⛱️": "daniel",
  amountOfDaysInYear: 30 * 12,
});
