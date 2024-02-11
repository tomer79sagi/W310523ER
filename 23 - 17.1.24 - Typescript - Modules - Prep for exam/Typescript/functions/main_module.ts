
// 1. Basic funtion expresion in TypeScript
const fn: Function = () => console.log('Hello');
fn();


// 2. Implicitly define a function + return type
const fn2 = (text: string, num: number): string => {
    return `This is a beautiful day ${text} - ${num}`;
}
const str: string = fn2('Tomer', 99);
console.log(str);


// 3. Optional arguments
const fn3 = (text: string, num?: number): string => {
    // A. Standard IF (multi-line)
    // if (num) {
    //     return `Hi ${text}, your lucky number is ${num}`;
    // }

    // B. Short one-line IF (one-line)
    // if (num)
    //     return `Hi ${text}, your lucky number is ${num}`;

    // C. Shortest IF (one-line)
    if (num) return `Hi ${text}, your lucky number is ${num}`;

    // the Else
    return `You didn't provide a 'num' value!`;
}
const str2: string = fn3('Tomer', 33); // The 'num' is provided option
console.log(str2);
const str3: string = fn3('Tomer'); // The ELSE
console.log(str3);


// 4. Default argument values
const fn4 = (text: string, num: number = 23): string => {
   if (num) return `Hi ${text}, your lucky number is ${num}`;

    // the Else
    return `You didn't provide a 'num' value!`;
}
const str4: string = fn4('Tomer', 33); // The 'num' is provided option
console.log(str4);
const str5: string = fn4('Tomer'); // The ELSE
console.log(str5);