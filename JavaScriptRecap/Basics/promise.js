"use strict";

//create a new promise
let newPromise = new Promise((resolve, reject) => {
  let checkString = "test passed";

  if (checkString === "test passed") {
    resolve("Success");
  } else {
    reject("Fail");
  }
});

//pass the value from promise to a message
newPromise
  .then((message) => {
    console.log(`message is ${message}`);
  })
  .catch((message) => {
    console.log(`message is ${message}`);
  })
  .then(() => {
    console.log(`This message prints regardless of outcome`);
  });

//create a new promise
let newPromise2 = new Promise((resolve, reject) => {
  let checkString = "test passed";

  if (checkString === "test passed") {
    resolve("Success");
  } else {
    reject("Fail");
  }
});

//Function to log data
let logger = (message) =>
  console.log(
    `This message is written from a separate function. The result of the promise is ${message}`
  );

//pass the value from promise to a message
newPromise2
  .then((message) => {
    logger(message);
  })
  .catch((message) => {
    logger(message);
  })
  .then(() => {
    console.log(`This message prints at the end`);
  });
