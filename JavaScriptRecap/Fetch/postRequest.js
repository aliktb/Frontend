"use strict";

let titleInput = document.querySelector("#titleInput");
let userIDInput = document.querySelector("#userIDInput");
let bodyInput = document.querySelector("#bodyInput");
let submitButton = document.querySelector("#submitButton");

let postData = () => {
  let titleFromInput = titleInput.value;
  let userIDFromInput = userIDInput.value;
  let bodyFromInput = bodyInput.value;

  let newObj = {
    title: titleFromInput,
    body: bodyFromInput,
    userId: userIDFromInput,
  };

  postFunction(newObj);
};

let postFunction = (object) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(object),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => {
    if (response.status !== 201) {
      console.error(`Status: ${response.status}`);
      return;
    }
    response.json().then((data) => {
      console.log(data);
      return data;
    });
  });
};

submitButton.addEventListener("click", postData);
