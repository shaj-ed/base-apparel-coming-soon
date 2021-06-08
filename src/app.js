// Select DOM
const form = document.querySelector("#form");
const input = document.querySelector(".form-input");
const inputGroup = document.querySelector(".input-group");
const modal = document.querySelector(".modal");

// Event
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = input.value;
  const pattern = /\S+\@\S+\.\S+/;

  if (!pattern.test(inputValue)) {
    showError("Please provide a valid email.");
  } else {
    modal.classList.add("show");
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
});

// Functions
function showError(message) {
  const span = document.createElement("span");
  span.classList.add("error");
  span.innerText = message;

  inputGroup.classList.add("input-error");

  form.appendChild(span);

  setTimeout(() => {
    inputGroup.classList.remove("input-error");
    span.remove();
  }, 1000);
}
