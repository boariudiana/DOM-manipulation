var firstName = document.querySelector("#first-name");
var lastName = document.querySelector("#last-name");
var message = document.querySelector("#text-area");


var submit = function (event) {
    document.querySelectorAll(".input-field").forEach(function(item){
      if(item.value === ""){
        item.classList.add("red-border");
        item.addEventListener("change", removeRedBorder)
      }
    })
    if(firstName.value.trim() !== "" && lastName.value.trim() !== "" && message.value !== ""){
      document.getElementById("text-hidden").innerHTML =
      " Thanks for contacting us " + firstName.value;
    document.getElementById("hidden-banner").style.display = "block";
    }
}
var submitBtn = document.getElementById("validate-btn");
submitBtn.addEventListener("click", submit);
var removeRedBorder = function(event){
  document.getElementById(event.target.id).classList.remove("red-border");
}