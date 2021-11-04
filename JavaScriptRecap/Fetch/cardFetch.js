let divSelector = document.querySelector("div");

fetch("https://api.punkapi.com/v2/beers?per_page=80").then((response) => {
  if (response.status !== 200) {
    console.error(`status: ${response.status}`);
    return;
  }
  response
    .json()
    .then((data) => {
      console.log(data);
      console.log(data[5].name);

      for (let obj of data) {
        addCard(obj);
      }
    })
    .catch((error) => {
      console.error(`${error}`);
    });
});

let addCard = (data) => {
  let newDiv2 = document.createElement("div");
  let newImg = document.createElement("img");
  let newerDiv = document.createElement("div");
  let newh5 = document.createElement("h5");
  let newp = document.createElement("p");
  let newa = document.createElement("a");

  newDiv2.classList.add("card");
  newDiv2.style.width = "22rem";

  newImg.classList.add("card-img-top");
  newImg.src = data.image_url;
  newImg.alt = data.name;
  newImg.style.height = "20rem";
  newImg.style.width = "auto";
  newImg.style.display = "block";
  newImg.style.marginLeft = "auto";
  newImg.style.marginRight = "auto";

  newerDiv.classList.add("card-body");
  newerDiv.classList.add("d-flex", "flex-column");

  newh5.classList.add("card-title");
  newh5.textContent = data.name;

  newp.classList.add("card-text");
  newp.textContent = data.description;

  newa.classList.add("btn");
  newa.classList.add("btn-primary");
  newa.classList.add("mt-auto");

  newa.textContent = data.tagline;

  divSelector.appendChild(newDiv2);
  newDiv2.appendChild(newImg);
  newDiv2.appendChild(newerDiv);
  newerDiv.appendChild(newh5);
  newerDiv.appendChild(newp);
  newerDiv.appendChild(newa);
};
