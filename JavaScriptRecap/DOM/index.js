"use strict";

let header1 = document.querySelector("#firstID");
console.log(header1);

let header2 = document.querySelector("#secondID");
console.log(header2);
console.log(typeof header2);

let header3 = document.querySelector("#thirdID");
console.log(header3);

header1.textContent = "This is a new h1 header modified in JS";
header2.textContent = "This is a new h2 header modified in JS";
header3.textContent = "This is a new h3 header modified in JS";

header1.style.color = "blue";
header2.style.fontWeight = "bolder";
header3.style.backgroundColor = "purple";

let allparas = document.querySelectorAll("p");
console.log(allparas);

for (let p of allparas) {
  p.style.fontFamily = "arial";
}

let borderparas = document.querySelectorAll(
  "#firstPara, #fourthPara, #sixthPara"
);
console.log(borderparas);

for (let p of borderparas) {
  p.style.border = "7px dashed blue";
}

let colorparas = document.querySelectorAll(
  "#secondPara, #thirdPara, #sixthPara"
);

console.log(colorparas);

for (let p of colorparas) {
  p.style.color = "red";
}

let capsparas = document.querySelectorAll("#firstPara, #thirdPara");

console.log(capsparas);

for (let p of capsparas) {
  p.style.textTransform = "uppercase";
}
