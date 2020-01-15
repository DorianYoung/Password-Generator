
//Form Output
function myFunction() {
    var userInput = document.getElementById("formInput");
    if (!userInput.checkValidity()) {
      document.getElementById("formOutput").innerHTML = userInput.validationMessage;
    } else {
      document.getElementById("formOutput").innerHTML = "Your Password is: ";
    } 
  } 

 