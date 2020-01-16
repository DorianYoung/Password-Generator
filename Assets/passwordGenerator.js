var passwordLength = document.querySelector("#userInput");
var specialCheck = document.querySelector("#specialInput");
var numberCheck = document.querySelector("#numberInput");
var lcCheck = document.querySelector("#lcInput");
var ucCheck = document.querySelector("#ucInput");
var display = document.querySelector("#display")


//pushes array into another array

var specialArray = ["@","#","$","%"];
var numArray = [0,1,2,3,4,5,6,7,8,9,0];
var lcArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var ucArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


// Form Output 

function showInput() {

  if (!specialCheck.checked && !numberCheck.checked && !lcCheck.checked && !ucCheck.checked) {
    display.innerHTML = "Please select all boxes.";
    return;
  }

  if (!userInput.checkValidity()) {
    document.getElementById("display").innerHTML = userInput.validationMessage;
  } else {
    document.getElementById("display").innerHTML = "Your Password is: " + document.getElementById("userInput").value;
  } 
  }

//Copy to Clipboard

function copyInput() {
  var copyText = document.getElementById("userInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}



  

  