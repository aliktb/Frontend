"use strict";

let header = document.querySelector("#header");
let textbox = document.querySelector("#inputText");
let button = document.querySelector("#pushSelect");

let changeHeader = (newText) => {
  header.textContent = newText;
};

button.addEventListener("click", () => {
  let textVal = textbox.value;
  console.log(textVal);
  changeHeader(textVal);
  textbox.value = "";
});
