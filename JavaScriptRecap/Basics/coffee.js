"use strict";

let coffees = [
  {
    orderNumber: 1,
    Milk: true,
    Toppings: ["cream, cocoa powder"],
    size: "small",
  },
  { orderNumber: 2, Milk: false, Toppings: ["milk froth"], size: "large" },
  { orderNumber: 3, Milk: false, Toppings: ["cream"], size: "medium" },
  {
    orderNumber: 4,
    Milk: true,
    Toppings: ["sprinkles", "cream", "cocoa powder"],
    size: "large",
  },
];

console.log(coffees[0].Milk);
console.log(coffees[1].Toppings);
console.log(coffees[2]);
console.log(coffees[3].Toppings[2]);

coffees.push({
  orderNumber: 5,
  Milk: true,
  Toppings: ["cream, sprinkles"],
  size: "medium",
});

console.log(coffees[4]);
