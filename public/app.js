// Show Modal
const openBtn = document.getElementById("open-contact");
const backdrop = document.getElementById("contact-backdrop");
const modal = document.getElementById("contact-modal");
const closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", () => {
  backdrop.classList.add("visible");
  modal.classList.add("visible");
});

closeBtn.addEventListener("click", () => {
  backdrop.classList.remove("visible");
  modal.classList.remove("visible");
});

// Close when clicking on backdrop
backdrop.addEventListener("click", () => {
  backdrop.classList.remove("visible");
  modal.classList.remove("visible");
});

// Form functionality

const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = "Form submitted successfully!";
        form.reset();
      } else {
        console.log(response);
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      setTimeout(() => {
        result.innerHTML = "";
      }, 3000);
    });
});
