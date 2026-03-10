const form = document.getElementById("registrationForm")
const message = document.getElementById("responseMessage")

form.addEventListener("submit", function(e){

e.preventDefault()

fetch(form.action, {
method: "POST",
body: new FormData(form)
})
.then(response => {

message.innerHTML = "Registration submitted successfully."
form.reset()

})
.catch(error => {

message.innerHTML = "Submission failed. Try again."

})

})