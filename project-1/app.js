// API
const key = config.API_KEY;
const endpoint = `https://v6.exchangerate-api.com/v6/${key}/latest/USD`;

// Select HTML elements
const search = document.querySelector(".searchBox");
const fromCurrency = document.querySelector(".from");
const toCurrency = document.querySelector(".to");
const convertBtn = document.querySelector(".convert-btn");
const convertedAmount = document.querySelector(".converted-amount");

// Variables
let searchValue;
let fromSelection;
let toSelection;

// Function to update the value
const updateValue = (e) => {
  searchValue = e.target.value;
  // console.log(searchValue);
};

// When user enters a number, invoke updateValue
search.addEventListener("input", updateValue);

// When from currency is changed, update value
fromCurrency.addEventListener("change", (e) => {
  fromSelection = `${e.target.value}`;
  // console.log(fromSelection);
});

// When to currency is changed, update value
toCurrency.addEventListener("change", (e) => {
  toSelection = `${e.target.value}`;
  // console.log(toSelection);
});

// Function to fetch exchange rate data from api
const getResults = async () => {
  const response = await fetch(`${endpoint}`);
  console.log(response);
  const data = await response.json();
  console.log(data);
  displayResult(data);
};

// Function to do the conversion and display the result
const displayResult = (currency) => {
  let fromRate = currency.conversion_rates[fromSelection];
  // console.log(fromRate);
  let toRate = currency.conversion_rates[toSelection];
  // console.log(toRate);

  convertedAmount.textContent = ((toRate / fromRate) * searchValue).toFixed(2);
};

// When user clicks convert button, invoke getResults function
convertBtn.addEventListener("click", getResults);

// When user clicks reset button, refresh the page
const clearVal = () => {
  window.location.reload();
};
