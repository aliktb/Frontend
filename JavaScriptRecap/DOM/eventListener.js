"use strict";

let header = document.querySelector("#header");
let textbox = document.querySelector("#inputText");
let button = document.querySelector("#pushSelect");
let cardButton = document.querySelector("#addCardButton");
let divSelector = document.querySelector("#newDiv");

console.log(divSelector);

let changeHeader = (newText) => {
  header.textContent = newText;
};

textbox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    console.log("enter has been pressed");
    let textVal = textbox.value;
    console.log(textVal);
    changeHeader(textVal);
    textbox.value = "";
  }
});

let addNewHeading = (newText) => {
  let newDiv1 = document.createElement("div");
  let newh2 = document.createElement("h2");
  let newPara = document.createElement("p");
  newh2.textContent = newText;
  console.log(`h2 text is ${newText}`);
  newPara.textContent = newText;
  console.log(`newText is ${newText}`);
  divSelector.appendChild(newDiv1);
  newDiv1.appendChild(newh2);
  newDiv1.appendChild(newPara);
};

let addNewPara = (newText) => {
  let newPara = document.createElement("p");
  newPara.textContent = newText;
  console.log(`newText is ${newText}`);
  divSelector.appendChild(newPara);
  console.log("Text created in new paragaph");
};

let addCard = () => {
  let newDiv2 = document.createElement("div");
  newDiv2.classList.add("card");
  newDiv2.style.width = "18rem";
  let newerDiv = document.createElement("div");
  newerDiv.classList.add("card-body");
  let newh5 = document.createElement("h5");
  newh5.classList.add("card-title");
  newh5.textContent = "Card title";
  let newp = document.createElement("p");
  newp.classList.add("card-text");
  newp.textContent =
    "Some quick example text to build on the card title and make up the bulk of the card's content.";
  let newa = document.createElement("a");
  newa.classList.add("btn");
  newa.classList.add("btn-primary");
  newa.textContent = "Go somewhere";

  divSelector.appendChild(newDiv2);
  newDiv2.appendChild(newerDiv);
  newerDiv.appendChild(newh5);
  newerDiv.appendChild(newp);
  newerDiv.appendChild(newa);
};

button.addEventListener("click", () => {
  let textVal = textbox.value;
  console.log(textVal);
  addNewPara(textVal);
  addNewHeading(textVal);
  changeHeader(textVal);
  textbox.value = "";
});

cardButton.addEventListener("click", () => {
  addCard();
});
