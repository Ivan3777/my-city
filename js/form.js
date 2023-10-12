const userNameField = document.querySelector("#user-name");
const userEmailField = document.querySelector("#user-email");
const formSubmitBtn = document.querySelector("#form-submit-btn");
const formContainer = document.querySelector("#form");

formContainer.addEventListener("submit", function (e) {
  e.preventDefault();
});

formSubmitBtn.addEventListener("click", function () {
  const formData = new FormData(formContainer);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(function (response) {
      if (response.ok) {
        alert("Дякую що відправили форму");
      } else {
        alert("Помилка при відправці форми");
      }
    })
    .catch(function (error) {
      alert("Помилка при відправці форми: " + error.message);
    });
  // .then(function () {
  //   alert("Дякую що відправили форму");
  // })
  // .catch(function () {
  //   alert("Помилка при відправці форми");
  // });
});
