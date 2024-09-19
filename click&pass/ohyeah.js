function mirrorText(){
var inputText = document.getElementById('inputText');
var outputText = document.getElementById('outputText');
outputText.textContent = inputText.value;
}

function displayAlert(){
    var inputText = document.getElementById('inputText').value;
     alert(`hello` + inputText);
}