// set variables for project
let $ = document;
const inputElement = $.getElementById("input-field");
const notesContainer = $.getElementById("listed");
const btnSaveElement = $.getElementById("btn-save");
const btnDeleteElement = $.getElementById("btn-delete");
const colorBoxSelectElement = $.querySelectorAll(".color-box");
const errorField = $.getElementById("error-field");
const appTitle = $.querySelector("title");

// set title for project
appTitle.innerHTML = "Note App";

// remove element by clicking on the target element
function removeElement(event) {
  event.target.parentNode.parentNode.removeChild(event.target.parentNode);
}

// change color of input element !
colorBoxSelectElement.forEach((element) => {
  element.addEventListener("click", (event) => {
    let mainColor = event.target.style.backgroundColor;
    inputElement.style.backgroundColor = mainColor;
  });
});

// set function for error handling
function errorBox(message) {
  errorField.textContent = message;
  errorField.classList.add("text-danger", "text-capitalize");
}

//reset color of input element and clear value of input element
function clearInputElementValue() {
  inputElement.style.backgroundColor = "#fff";
  inputElement.value = "";
}

//generate new task Element creation function
function generateNewElement() {
  let inputBg = inputElement.style.backgroundColor;
  let newNoteDivElement = $.createElement("div");
  newNoteDivElement.className = "card shadow-sm rounded";
  let newNotePElement = $.createElement("p");
  newNotePElement.className = "card-text p-3 lead text-capitalize";
  newNotePElement.innerHTML = inputElement.value;
  newNoteDivElement.append(newNotePElement);
  notesContainer.append(newNoteDivElement);
  newNoteDivElement.style.backgroundColor = inputBg;

  //add event for deleting thee created getElementById
  newNoteDivElement.addEventListener("click", removeElement);
  clearInputElementValue();
  errorField.innerHTML = "";
}

//reset input element event
btnDeleteElement.addEventListener("click", (event) => {
  clearInputElementValue();
  if (inputElement.value === "") {
    errorBox("there is no content in this box.");
  }
});

//genrate new task event setting
btnSaveElement.addEventListener("click", () => {
  if (inputElement.value === "") {
    errorBox("there is no content in this box to add");
  } else {
    generateNewElement();
  }
});
inputElement.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    if (inputElement.value === "") {
      errorBox("there is no content in this box to add");
    } else {
      generateNewElement();
    }
  }
});
