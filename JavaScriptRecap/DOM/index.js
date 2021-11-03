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

let changeTextContent = () => {
  console.log("changing text...");
  for (let p of borderparas) {
    p.textContent = "This text has now been modified using event listeners";
  }
};

let secondpara = document.querySelector("#secondPara");
let thirdpara = document.querySelector("#thirdPara");
let fourthpara = document.querySelector("#fourthPara");

let button1 = document.querySelector("#firstButton");
let button2 = document.querySelector("#secondButton");
let button3 = document.querySelector("#thirdButton");
let button4 = document.querySelector("#fourthButton");

console.log(button1);

button1.addEventListener("click", changeTextContent);
button2.addEventListener("click", () => {
  console.log("button2 has been pressed");
  secondpara.style.color = "purple";
});

button3.addEventListener("click", () => {
  console.log("button3 has been pressed");
  thirdpara.style.fontSize = "20px";
  thirdpara.style.color = "green";
});

button4.addEventListener("click", () => {
  console.log("button4 has been pressed");
  fourthpara.style.border = "0px";
});
