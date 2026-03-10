document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = e.target;
  const message = document.getElementById("responseMessage");
  const button = form.querySelector("button");

  message.textContent = "Submitting registration...";
  button.disabled = true;

  const data = {
    timestamp: new Date().toISOString(),
    fullname: form.fullname.value.trim(),
    email: form.email.value.trim(),
    phone: form.phone.value.trim(),
    gender: form.gender.value,
    age: form.age.value,
    role: form.role.value,
    organization: form.organization.value.trim(),
    training: form.training.value,
    concern: form.concern.value,
    linkSafety: form.linkSafety.value,
    scamVictim: form.scamVictim.value,
    source: form.source.value,
    consent: form.consent.value
  };

  fetch("https://script.google.com/macros/s/AKfycbyX8_ltlP_Kjkoeu_FR9UCmpmlbrexYdugBXNsKi39Um4a--MMhJESozDjVmnhRYTc/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {

    if (result.status === "success") {
      message.textContent = "Registration successful. Thank you for joining Cybersecurity Awareness Week.";
      form.reset();
    } else {
      message.textContent = "Submission failed. Please try again.";
    }

    button.disabled = false;

  })
  .catch(error => {
    message.textContent = "Network error. Check connection and try again.";
    console.error(error);
    button.disabled = false;
  });
});
