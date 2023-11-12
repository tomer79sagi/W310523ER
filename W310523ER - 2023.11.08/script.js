/*** TYPE CONVERSIONS */

// FALSY VALUES
console.log("", Boolean(""));

console.log(0, Boolean(0));
console.log(-0, Boolean(-0));
console.log(NaN, Boolean(NaN));

console.log(false, Boolean(false));

console.log(null, Boolean(null));

console.log(undefined, Boolean(undefined));

// TRUTHY VALUES
console.log("       ", Boolean("       "));
console.log(" ", Boolean(" "));
console.log("ads4", Boolean("ads4"));
console.log(-55, Boolean(-55));
console.log(5, Boolean(5));
console.log(0.00000000001, Boolean(0.00000000001));
console.log(true, Boolean(true));
console.log({}, Boolean({}));

/** Convert to String */

console.log("to string");

console.log(false, String(false));
console.log(true, String(true));
console.log(4343, String(4343));
console.log(4343.444, String(4343.444));
console.log(null, String(null));
console.log(undefined, String(undefined));
console.log({}, String({}));

console.log(new Date(), String(new Date()));
console.log(new Date(), "with .toString()", new Date().toString());
console.log(new Date(), "with .toString()", {}.toString());

// Number
console.log(Number(true));

console.log(Number(false));
console.log(Number(null));
console.log(Number(""));
console.log(Number("                            "));

console.log(Number(undefined));
console.log(Number("dskfjasd"));
console.log(Number("4343adskfjasd"));
console.log(Number("      233a2.3232"));
console.log(Number("      23 32.3232       "));

console.log(Number("2332.3232"));
console.log(Number("      2332.3232"));
console.log(Number("      2332.3232       "));
