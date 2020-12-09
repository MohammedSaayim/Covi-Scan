var btnTranslate= document.querySelector("#btn-translate");
var input= document.querySelector("#englishInput")
var output= document.querySelector('#bananaOutput')
console.log(input.value)
var url="https://api.funtranslations.com/translate/minion.json?text="

function constructUrl(inputTxt){
    url=url+inputTxt
    console.log(inputTxt)
    return url
}

function errorHandler(error){
    console.log("error occured", error)
    alert("Something wrong with server! Please try again")
}



fetch(constructUrl(input.value))
.then(function responseHandler(response){
    return response.json()
})

.then(function logJson(json){
    console.log(json.contents.translated)
    var outputTxt=json.contents.translated
    return outputTxt
})

.then(
function addEventHandler(outputTxt){
    output.innerText=outputTxt
    console.log(innerText)
    })

btnTranslate.addEventListener("click",  addEventHandler)

var textArea= document.querySelector("textArea");



