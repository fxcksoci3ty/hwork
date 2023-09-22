const data = [
  {
    id: 1,
    name: "Steven",
    image: "https://i.ibb.co/tXqmKKR/1.png",
    salary: "5000",
  },
  {
    id: 2,
    name: "Neena",
    image: "https://i.ibb.co/yYxK3cq/2.png",
    salary: "10000",
  },
  {
    id: 3,
    name: "John",
    image: "https://i.ibb.co/SNqFDbB/3.png",
    salary: "4500",
  },
  {
    id: 4,
    name: "Rogers",
    image: "https://i.ibb.co/WnG0fVZ/4.png",
    salary: "3400",
  },
  {
    id: 5,
    name: "Cevin",
    image: "https://i.ibb.co/vdQK54J/6.png",
    salary: "500",
  },
  {
    id: 6,
    name: "Alshey",
    image: "https://i.ibb.co/wSJN6db/5.png",
    salary: "1210",
  },
  {
    id: 7,
    name: "Milki",
    image: "https://i.ibb.co/JpnDnH5/7.png",
    salary: "1210",
  },
  {
    id: 8,
    name: "Polar",
    image: "https://i.ibb.co/SnNLhgg/9.png",
    salary: "1210",
  },
  {
    id: 9,
    name: "Grindell",
    image: "https://i.ibb.co/fGH3RPW/8.png",
    salary: "1210",
  },
];
const images = [
  "https://i.ibb.co/tXqmKKR/1.png",
  "https://i.ibb.co/yYxK3cq/2.png",
  "https://i.ibb.co/SNqFDbB/3.png",
  "https://i.ibb.co/WnG0fVZ/4.png",
  "https://i.ibb.co/vdQK54J/6.png",
  "https://i.ibb.co/wSJN6db/5.png",
  "https://i.ibb.co/JpnDnH5/7.png",
  "https://i.ibb.co/SnNLhgg/9.png",
  "https://i.ibb.co/fGH3RPW/8.png",
];

let users = JSON.parse(localStorage.getItem("users")) ?? data;

const rootDiv = document.querySelector("#root");
const cardContainer = document.createElement("div");
const formContainer = document.createElement("div");
cardContainer.classList.add("card-container");
formContainer.classList.add("form-container");

rootDiv.append(formContainer, cardContainer);

function renderForm() {
  // form element & form title
  const formTitle = document.createElement("h2");
  const form = document.createElement("form");

  // inputs
  const inputsContainer = document.createElement("div");
  const nameInput = document.createElement("input");
  const salaryInput = document.createElement("input");

  // submit button
  const submitBtn = document.createElement("button");

  form.classList.add("form");

  inputsContainer.classList.add("inputs-container");
  nameInput.classList.add("input");
  salaryInput.classList.add("input");
  submitBtn.classList.add("submit-btn");

  // form title
  formTitle.textContent = "Create new user";

  // name input properties
  nameInput.placeholder = "New user's name";
  nameInput.name = "name";
  nameInput.required = true;
  nameInput.type = "text";

  // salary input properties
  salaryInput.placeholder = "New user's salary";
  salaryInput.name = "salary";
  salaryInput.type = "number";
  salaryInput.required = true;

  // submit button text
  submitBtn.textContent = "Create";

  // append elements to their corresponding containers
  inputsContainer.append(nameInput, salaryInput);
  form.append(inputsContainer, submitBtn);
  formContainer.append(formTitle, form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form_data = new FormData(form);
    const { name, salary } = Object.fromEntries(form_data);
    // const id = Date.now(); // ID, согласно заданию
    const id = (users.length !== 0) ? Math.max(...users.map(elem => elem.id)) + 1 : 1; // аналог автоинкремента
    addUser({ name, salary, id });
    nameInput.value = "";
    salaryInput.value = "";
  });
}

function render(array) {
  if (array.length === 0) {
    cardContainer.style.gridTemplateColumns = "repeat(1, 1fr)";
    cardContainer.innerHTML = "No users found, try creating one :)";
  } else {
    cardContainer.style.gridTemplateColumns = "repeat(2, 1fr)";
  }

  array.forEach((item) => {
    const cardElem = document.createElement("div");

    const imageContainer = document.createElement("div");
    const imageElem = document.createElement("img");

    const contentContainer = document.createElement("div");
    const nameElem = document.createElement("h3");
    const salaryElem = document.createElement("p");
    const idElem = document.createElement("p");

    cardElem.classList.add("card");
    contentContainer.classList.add("content");

    // image properties
    imageElem.src = item.image;
    imageElem.alt = `${item.name}'s image`;
    imageElem.classList.add("image");

    nameElem.textContent = `Name: ${item.name}`;
    salaryElem.textContent = `Salary: ${item.salary}`;
    idElem.textContent = `User number: ${item.id}`;

    imageContainer.append(imageElem);
    contentContainer.append(nameElem, salaryElem, idElem);
    cardElem.append(imageContainer, contentContainer);
    cardContainer.append(cardElem);

    cardElem.addEventListener("dblclick", () => deleteUser(item.id));
  });
}

function rerender(array) {
  localStorage.setItem("users", JSON.stringify(array));
  cardContainer.innerHTML = "";
  render(array);
}

function randomImage(imagesArray) {
  return imagesArray[Math.floor(Math.random() * imagesArray.length)];
}

function addUser(userObj) {
  users.push({ ...userObj, image: randomImage(images) });
  rerender(users);
}

function deleteUser(id) {
  users = users.filter((elem) => elem.id !== id);
  rerender(users);
}

renderForm();
render(users, cardContainer);
