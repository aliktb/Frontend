"use strict";

let result;
let num1;
let num2;
let nameStr;

// function add(x,y){
//     return `x + y = ${x + y}`;
// };

let add = (x, y) => `${x} + ${y} = ${x + y}`;

// function sub(x,y){

// };

let sub = (x, y) => `${x} - ${y} = ${x - y}`;

// function multiply(x,y){

// };

let multiply = (x, y) => `${x} * ${y} = ${x * y}`;

// function divide(x,y){

// };

let divide = (x, y) => `${x} / ${y} = ${x / y}`;

// function oddOrEven(x){
//     if(x % 2 == 0){
//         return `${x} is even!`;
//     } else {
//         return `${x} is odd!`;
//     };
// };

let oddOrEven = (x) => {
  if (x % 2 == 0) {
    return `${x} is even!`;
  } else {
    return `${x} is odd!`;
  }
};

// function runMethod(method){
//     console.log("************");
//     console.log(method);
// }

let runMethod = (method) => {
  console.log("*************");
  console.log(method);
};

// function startCalculator(){
//     console.log("Starting up Calculator now!");
// }

let maxNum = (x, y) => {
  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  } else if (x == y) {
    return "x and y are the same";
  }
};

let minNum = (x, y) => {
  if (x < y) {
    return x;
  } else if (y < x) {
    return y;
  } else if (x == y) {
    return "x and y are the same";
  }
};

let roundUp = (x) => {
  return Math.ceil(x);
};

let roundDown = (x) => {
  return Math.floor(x);
};

let startCalculator = () => {
  console.log("Starting up calculator now!");
};

// function turnOffCalculator(name){
//     console.log(`Goodbye ${name}!`);
// }

let turnOffCalculator = (name) => {
  console.log(`Goodbye ${name}`);
};

startCalculator();
num1 = 5;
num2 = 12;
nameStr = "Reece";

runMethod(add(num1, num2));
runMethod(sub(num1, num2));
runMethod(multiply(num1, num2));
runMethod(divide(num1, num2));

runMethod(oddOrEven(num1));

runMethod(roundUp(3.01));
runMethod(roundDown(3.1));

turnOffCalculator(nameStr);
