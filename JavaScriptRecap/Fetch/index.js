"use strict";

let h2header = document.querySelector("#h2header");
let newDiv = document.querySelector("#newDiv");

let changeHeader = (textToChange) => {
  h2header.textContent = textToChange;
};

let addHeader = (textToChange) => {
  let newHeader = document.createElement("h2");
  newHeader.textContent = textToChange;
  newDiv.appendChild(newHeader);
};

let addPara = (textToChange) => {
  let newPara = document.createElement("p");
  newPara.textContent = textToChange;
  newDiv.appendChild(newPara);
};

fetch("https://jsonplaceholder.typicode.com/comments").then((response) => {
  if (response.status !== 200) {
    console.error(`status: ${response.status}`);
    return;
  }
  response
    .json()
    .then((data) => {
      console.log(data);
      console.log(data[5].email);

      for (let i = 0; i < 10; i++) {
        addHeader(data[i].name);
        addPara(data[i].email);
      }
    })
    .catch((error) => {
      console.error(`${error}`);
    });
});
