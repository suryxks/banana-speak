var btn=document.querySelector("button")
var optputElement=document.querySelector("#txt-output");
var inputTextArea=document.querySelector("#txt-input");
var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var txtval=inputTextArea.value;
function getUrl(url,value){
    return url+"?"+"testing="+value;
}
var output=fetch(getUrl(url,txtval))
.then(res=>res.json());
btn.addEventListener("click", function(){
  optputElement.innerText=output;
});