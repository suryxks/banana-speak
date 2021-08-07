var btn=document.querySelector("#btn-translate")
var outDiv=document.querySelector("#txt-output")
var inputTextArea=document.querySelector("#txt-input");
var url="https://api.funtranslations.com/translate/minion.json";

function constructURL(text){
    return url + "?" + "text=" + text;
}
 function errorHandler(error){
   console.log("error occured",error);
 }
btn.addEventListener("click", function(){
  var txtval=inputTextArea.value;
 var op= fetch(constructURL(txtval))
  .then(res=>res.json())
  .then(json=>{
      var output=json.contents.translated;
      outDiv.innerText=output;
      
  })
  .catch(errorHandler);

});