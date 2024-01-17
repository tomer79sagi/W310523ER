
// Regular use of union type
const myArr2: Array<string | number | boolean> = [0, 'Tomer'];

// Alias use of union type
type combined = string | number | boolean;
const myArr: Array<combined> = [0, 'Tomer'];