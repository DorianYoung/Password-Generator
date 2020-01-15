// Form Output 

function showInput() {
  if (!userInput.checkValidity()) {
    document.getElementById("display").innerHTML = userInput.validationMessage;
  } else {
    document.getElementById("display").innerHTML = "Your Password is: " + document.getElementById("userInput").value;
  } 
  }