var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/orcish.json"

function getTranslateURL(text){
    return serverURL + "?" + "text=" + text
}

function errrorHandler(error){
    console.log("error occured", error)
    alert("something wrong with server !! try again after sometime")
}

function clickEventHandler(){
    

    var innerText = txtInput.value;

    fetch(getTranslateURL(innerText))
        .then( newFunction())
        .then(json => { 
            var translateText = json.contents.translated;
            outputDiv.innerText = translateText;
            })
        .catch(errrorHandler)

    function newFunction() {
        return response => response.json();
    }
};

btnTranslate.addEventListener("click",clickEventHandler)