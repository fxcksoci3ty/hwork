const rootDiv = document.querySelector("#root");

function fetchProducts() {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => render(data.products))
    .catch((e) => console.error(e));
}

function render(array) {
  array.forEach((item) => {
    const card = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = `Title: ${item.title}`;
    const price = document.createElement("p");
    price.textContent = `Price: ${item.price}`;
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("imageDiv");
    const image = document.createElement("img");
    image.src = item.thumbnail;
    const ratingDiv = document.createElement("div");
    ratingDiv.classList.add("rating");

    rating(item.rating, ratingDiv);

    imageDiv.append(image);
    card.append(imageDiv, title, price, ratingDiv);
    rootDiv.append(card);
  });
}

function rating(rating, ratingDiv) {
  for (let i = 0; i < 5; i++) {
    const star = document.createElement("span");
    star.classList.add("fa", "fa-star");

    if (i < Math.floor(rating)) {
      star.classList.add("active");
    }

    ratingDiv.append(star);
  }
}

fetchProducts();
