// -------------------------------------
// 1. Exercise
const cart1 = [4, 30, 76, 100];
const cart2 = [1, 600, 56, 60];

let carts = [cart1, cart2];
console.log(carts);

carts[1][2] = 99;
console.log(carts);
console.log(cart2);


// -------------------------------------
// 2. Exercise using spread operator
carts = [...cart1, ...cart2];
console.log(carts);

carts[7] = 99
console.log(carts);
console.log(cart2);


// -------------------------------------
// 3. Change value of cart1
console.log(carts);

cart1[2] = 777;
console.log(cart1);
console.log(carts);