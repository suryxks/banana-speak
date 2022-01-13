var btn = document.querySelector("#btn-translate")
var outDiv = document.querySelector("#txt-output")
var inputTextArea = document.querySelector("#txt-input");
var url = "https://api.funtranslations.com/translate/minion.json";

const constructURL = text => `${url}?text=${text}`;

const errorHandler = error => {
  alert("you Have crossed the limit Try after an hour", error);
}
btn.addEventListener("click", () => {
  let txtval = inputTextArea.value;
  let op = fetch(constructURL(txtval))
    .then(res => res.json())
    .then(json => {
      var output = json.contents.translated;
      outDiv.innerText = output;

    })
    .catch(errorHandler);

});