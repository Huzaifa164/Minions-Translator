const txtInput = document.querySelector("#txt-input");
const btnTranslate = document.querySelector("#btn-translate");
const txtOutput = document.querySelector("#txt-output");

const url = "https://api.funtranslations.com/translate/minion.json";

function changeHandler(text) {
    return url + "?text=" + text;
}

function errorHandler(error) {
    alert("Error: " + error);
}

btnTranslate.addEventListener("click", clickHandler);

function clickHandler() {
    // txtOutput.innerText = txtInput.value;

    fetch(changeHandler(txtInput.value))
    .then(response => response.json())
    .then(json => {
        txtOutput.innerHTML = json.contents.translated;
    })
    .catch(errorHandler)
}