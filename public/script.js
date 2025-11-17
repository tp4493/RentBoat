function toggleForm() {
  const form = document.getElementById("contactForm");
  const backdrop = document.getElementById("backdrop");

  if (form.style.display === "none" || form.style.display === "") {
    form.style.display = "block";
    backdrop.style.display = "block";
    setTimeout(() => {
      form.classList.add("visible");
      backdrop.classList.add("visible");
    }, 10);
  } else {
    form.classList.remove("visible");
    backdrop.classList.remove("visible");
    setTimeout(() => {
      form.style.display = "none";
      backdrop.style.display = "none";
    }, 300);
  }
}

function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission
  const formData = new FormData(document.getElementById("contactFormSubmit"));
  console.log("Name:", formData.get("name"));
  console.log("Email:", formData.get("email"));
  console.log("Subject:", formData.get("subject"));
  console.log("Message:", formData.get("message"));
  alert("Form submitted! Check the console for data.");
}
