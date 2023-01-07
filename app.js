var translateButton = document.querySelector("#trans-button");

// console.log(translateButton , "clicked");


var textInput = document.querySelector("#text-input");

// console.log(textInput);


var textOutput = document.querySelector("#output");

// textOutput.innerText = "Ayushi Pandey";
// console.log(textOutput);

var serverURL = "https://api.funtranslations.com/translate/yoda.json";


function getServerURL(text){
    return serverURL + "?" + "text=" + text 
}

function errorHandler(error){
    console.log("error occured" , error);
    alert("someting wrong with serverURL. please try again after sometime!")
}

function clickEventHandler(){
    var userInput = textInput.value

    fetch(getServerURL(userInput))
    // console.log(getServerURL(userInput))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        textOutput.innerText = translatedText;
    })
    .catch(errorHandler);
}

translateButton.addEventListener("click" , clickEventHandler)
