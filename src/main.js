var firstName = document.querySelector("#first-name");
var lastName = document.querySelector("#last-name");
var message = document.querySelector("#text-area");
firstName.value = "";
lastName.value = "";
message.value = "";

var submit = function (event) {
  if (
    firstName.value.trim() !== "" &&
    lastName.value.trim() !== "" &&
    message.value.trim() !== ""
  ) {
    document.getElementById("text-hidden").innerHTML =
      " Thanks for contacting us " + firstName.value;
    document.getElementById("hidden-banner").style.display = "block";

    console.log("First name:", firstName.value);
    console.log("Last name : ", lastName.value);
    console.log("Message:", message.value);
  }
}
var submitBtn = document.getElementById("validate-btn");
submitBtn.addEventListener("click", submit);
