// Variables
let square;
let gridSquare;
let colorSelected;

// Selectors
const body = document.querySelector("body");
const sliderValue = document.querySelector(".slider");
const gridSizeDisplay = document.querySelector(".grid-size");
const grid = document.querySelector(".grid");
const color = document.querySelectorAll(".color");
const rgbaColor = document.querySelector(".rgba");
const reset = document.querySelector(".reset");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalClose = document.querySelector(".close");
const modalYes = document.querySelector(".modal--yes");
const modalNo = document.querySelector(".modal--no");

// Creates grid chosen by user. EX. 10x10
function createGrid(value) {
  for (let i = 0; i !== value * value; i++) {
    gridSquare = document.createElement("div");
    gridSquare.classList.add("square");
    squareStyling(value);
    grid.appendChild(gridSquare);
  }
}

// Updates display located next to slider container
function updateGridDisplay(value) {
  gridSizeDisplay.textContent = `${value} x ${value}`;
}

// Applies some UMPH to our squares
function squareStyling(value) {
  gridSquare.style.width = `${100 / value}%`;
  gridSquare.style.height = `${100 / value}%`;
  gridSquare.style.backgroundColor = "#EAEAEA";
}

// Could probably just set this in the styles sheet but im lazy
function gridStyling() {
  grid.style.display = "flex";
  grid.style.flexWrap = "wrap";
}

function toggleModal() {
  modal.classList.toggle("--hidden");
  overlay.classList.toggle("--hidden");
}

function paintSquare() {
  square.forEach((square) => {
    square.addEventListener("mouseover", function () {
      square.style.backgroundColor = `${colorSelected}`;
    });
  });
}

// Function is called by scroller
const updateGrid = function (value) {
  grid.innerHTML = "";
  createGrid(value);
  gridStyling();

  square = document.querySelectorAll(".square");

  paintSquare();
};

reset.addEventListener("click", function () {
  toggleModal();
});

// Resets drawing board
modalYes.addEventListener("click", function () {
  square.forEach((square) => {
    square.style.backgroundColor = "#EAEAEA";
  });
  toggleModal();
});

modalNo.addEventListener("click", function () {
  toggleModal();
});

color.forEach((color) => {
  color.addEventListener("click", function () {
    colorSelected = color.style.backgroundColor;
  });
});

const rgbaValue = function (value) {
  colorSelected = value;
};
