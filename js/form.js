const scriptURL =
  "https://script.google.com/macros/s/AKfycbxJZTm4Vk0_uZf_SEZaH9gf20lic7ZE732h9-GtTH8anidHMtRJFsxYf6OXU3NaMg_HYQ/exec";
const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thanks for Contacting us..! We Will Contact You Soon...")
    )
    .catch((error) => console.error("Error!", error.message));
});
