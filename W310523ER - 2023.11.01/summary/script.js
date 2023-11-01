const obj = {
  name: "daniel",
  address: {
    city: "holon",
  },
};

obj.name; // "daniel"

/**
 * Escape characters (\ in a string)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals
 *
 * for \ write \\
 * for new line write \r\n
 * for ' in a string ('') write \'
 * for " in a string ("") write \"
 * for tab character write \t
 */

console.log("\" '");
console.log("dog's");
console.log("\\");
console.log("hello\tmy name is\r\n1\r\n2\r\n3");

/**
 * numbers
 */

console.log(3);
console.log(4);
console.log(-5);
console.log(-87.3);
console.log(9999_999_999_99_9.45);
console.log(99_9_999_999_999_9.45);
console.log(9999999999999.45)
