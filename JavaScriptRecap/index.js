"use strict";

let age = 17;

if (age >= 18 && age <= 65) {
  console.log("age is between 18 and 65");
} else if (age > 65) {
  console.log("age is more than 65");
} else {
  console.log("age is less than 18");
}

let answer;

age >= 50 ? (answer = "older than 50") : (answer = "younger than 50");

console.log(answer);
