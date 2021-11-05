"use strict";

let deleteButton = document.querySelector("#deleteButton");
let numberInput = document.querySelector("#numberInput");

let deleteRequest = (number) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${number}`, {
    method: `DELETE`,
  }).then((response) => {
    if (response.status !== 200) {
      console.error(`Status: ${response.statusText}`);
      return;
    }
    response.json().then((data) => {
      console.log(data);
    });
  });
};

deleteButton.addEventListener("click", () => {
  let idToDelete = numberInput.value;
  deleteRequest(idToDelete);
  numberInput.textContent = "";
});
