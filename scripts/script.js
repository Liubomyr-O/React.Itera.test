const btns = document.querySelectorAll(".btn");
const confirmation = document.querySelector(".modal");
const form = document.querySelector(".emailForm");
const header = document.querySelector(".header");
const result = document.querySelector(".result");
let email = "";

document.querySelector(".emailForm").addEventListener("submit", (e) => {
  e.preventDefault();
  email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (password !== 0 && email.includes("@")) {
    confirmation.classList.add("modalOn");
    let span = document.querySelector(".emailToConfirm");
    span.innerHTML = email;
  }
});

document.querySelector(".cancel").addEventListener("click", (e) => {
  e.preventDefault();
  confirmation.classList.remove("modalOn");
});

document.querySelector(".confirm").addEventListener("click", (e) => {
  e.preventDefault();
  let span = document.querySelector(".emailConfirmed");
  span.innerHTML = email;
  form.classList.add("hide");
  header.classList.add("hide");
  confirmation.classList.remove("modalOn");
  result.classList.remove("hide");
});
