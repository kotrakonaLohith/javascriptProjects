//targeting the elements
const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

let data = [];
//fetch random user and add money
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();
  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };
  addData(newUser);
}

//mapping the money to double it
function getDoubleMoney() {
  data = data.map(user => {
    return { ...user, money: user.money * 2 };
  });
  updateDom();
}

// sort the richest by money
function getRichest() {
  data = data.sort((a, b) => b.money - a.money);
  updateDom();
}

// filter the millionaries by money
function getMillionaires() {
  data = data.filter(user => user.money > 1000000);
  updateDom();
}

// calculate the total wealth using reduce
function getTotalWealth() {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);
  const wealthElement = document.createElement("div");
  wealthElement.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
    wealth
  )}</strong></h3`;
  main.appendChild(wealthElement);
}

// push user information to data
function addData(user) {
  data.push(user);
  updateDom();
}

//to upadate DOM with the user information
function updateDom(providedData = data) {
  main.innerHTML = "<h2><strong>Person</strong>Wealth</h2>";
  providedData.forEach(item => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

//Used Intl API to convert the number to currency
function formatMoney(amount) {
  return new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD"
  }).format(amount);
}

//Event Listeners
addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", getDoubleMoney);
sortBtn.addEventListener("click", getRichest);
showMillionairesBtn.addEventListener("click", getMillionaires);
calculateWealthBtn.addEventListener("click", getTotalWealth);
