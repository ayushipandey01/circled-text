var textInput = document.querySelector("#text-input");

// console.log(textInput);

var translateButton = document.querySelector("#trans-button");

// console.log(translateButton , "clicked");

var textOutput = document.querySelector("#output");

// textOutput.innerText = "Ayushi Pandey";
// console.log(textOutput);

var ServerURL = "https://api.funtranslations.com/translate/yoda.json" ;


function getServerURL(text){
    return ServerURL + "?" + "text=" + text ;
}

function errorHandler(error){
    console.log("error occured" , error);
    alert("someting wrong with serverURL. please try again after sometime!")
}

function clickEventHandler(){
    var userInput = textInput.value;

    fetch(getServerURL(userInput))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.content.translated;
        textOutput.innerText = translatedText;
    })
    .catch(errorHandler)
}

translateButton.addEventListener("click" , clickEventHandler);
