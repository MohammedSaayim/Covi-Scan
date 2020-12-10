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



function addEventHandler(){
fetch(constructUrl(input.value))

.then(function responseHandler(response){
    return response.json()
})

.then(function logJson(json){
    console.log(json.contents.translated)
    var outputTxt=json.contents.translated
    output.innerText=outputTxt
    console.log(output.innerText)
    .catch(errorHandler)
})

}

btnTranslate.addEventListener("click",  addEventHandler)


console.log(btnTranslate)
