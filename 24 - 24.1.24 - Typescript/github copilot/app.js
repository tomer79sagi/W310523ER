"use strict";
function sum(a, b) {
    return a + b;
}
const avg = (arrNumbers) => {
    const sumOfNumbers = arrNumbers.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
    return sumOfNumbers / arrNumbers.length;
};
// Function that asks the user for a number, generates a random number from 1 until the provided number
// and prints to the console the name Tomer, the amount of times created by the random number
function printTomer(num) {
    const randomNum = Math.floor(Math.random() * num) + 1;
    for (let i = 0; i < randomNum; i++) {
        console.log('Tomer');
    }
}
// פונקציה שמדפיסה את לוח הכפל
function printMultiplicationTable() {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
}
// An object oriented structure for running an animal shelter. 
// I want an Animal base class, and 2 sub classes, mammals and sea creatures
// Animal will have 4 properties: name, color, noOfLegs, and type.
// Mammal will 1 additional property: runningSpeed
// Sea creature will have 2 unique properties: canSwim, speedInWater
class Animal {
    constructor(name, color, noOfLegs, type) {
        this.name = name;
        this.color = color;
        this.noOfLegs = noOfLegs;
        this.type = type;
    }
}
class Mammal extends Animal {
    constructor(name, color, noOfLegs, type, runningSpeed) {
        super(name, color, noOfLegs, type);
        this.runningSpeed = runningSpeed;
    }
}
class SeaCreature extends Animal {
    constructor(name, color, noOfLegs, type, canSwim, speedInWater) {
        super(name, color, noOfLegs, type);
        this.canSwim = canSwim;
        this.speedInWater = speedInWater;
    }
}
