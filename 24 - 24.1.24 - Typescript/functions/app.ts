const fn = (text: string, num: number = 1): string => {
    return text + num;   
}

// console.log(fn('Tomer'));
// console.log(fn('Hello', 2));


// -- Return UNION TYPE --
const fn2 = (text: string, num: number = 2): string | null => {
    if (num === 1) {
        return null;
    }
    return text + num;
}
console.log(fn2('Tomer')); // Tomer2 (default)
console.log(fn2('Hello', 2)); // Hello2
console.log(fn2('Goodbye', 1)); // null


// -- Return VOID --
const fn3 = (text: string, num: number = 2): void => {
    console.log(text + num);
}


// -- Add implementation after declaration of function --
let fn4: (text: string, num: number) => string; // Declare (FUNCTION IS EMPTY)
fn4 = (text, num) => {
    return text + num;
}
console.log(fn4('Goodbye', 4)); // Goodbye4


// -- Callback function --
const fn5 = (cb: Function): string => {
    const myString: string = cb();
    return myString;
}

const funcA = (): string => {
    return 'Hello';
}

const str = fn5(funcA);
console.log(str); // Hello


// -- Objects with functions --
const obj = {
    name: 'Tomer',
    age: 30,
    fn: (text: string): string => {
        return text;
    }
}
console.log(obj.name, obj.age, obj.fn('Hello'));
