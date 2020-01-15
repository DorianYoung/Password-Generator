// Form Output 

function showInput() {
  if (!userInput.checkValidity()) {
    document.getElementById("display").innerHTML = userInput.validationMessage;
  } else {
    document.getElementById("display").innerHTML = "Your Password is: " + document.getElementById("userInput").value;
  } 
  }


function copyInput() {
  var copyText = document.getElementById("userInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}

  

  