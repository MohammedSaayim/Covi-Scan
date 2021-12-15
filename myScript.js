// var btnTranslate= document.querySelector("#btn-translate");
// var input= document.querySelector("#englishInput")
// var output= document.querySelector('#bananaOutput')
// console.log(input.value)
// var url="https://api.funtranslations.com/translate/pirate.json?text="

// function constructUrl(inputTxt){
//     url=url+inputTxt
//     console.log(inputTxt)
//     return url
// }

// function errorHandler(error){
//     console.log("error occured", error)
//     alert("Something wrong with server! Please try again")
// }



// function addEventHandler(){
// fetch(constructUrl(input.value))

// .then(function responseHandler(response){
//     return response.json()
// })

// .then(function logJson(json){
//     console.log(json.contents.translated)
//     var outputTxt=json.contents.translated
//     output.innerText=outputTxt
//     console.log(output.innerText)
//     .catch(errorHandler)
// })

// }

// btnTranslate.addEventListener("click",  addEventHandler)


// console.log(btnTranslate)

fetch('https://covid19-detection-api.herokuapp.com/warmup').then(response => response.json()).then(response => {console.log(response)}); 

document.querySelector("#form-button").addEventListener('click', handleForm); 

function handleForm(event) { 	
    event.preventDefault(); 	
    document.querySelector("#form-button").disabled = true; 	
    let image = document.querySelector("#input_image"); 	
    
    if(image.files.length <= 0){ 		
        document.querySelector("#orig_submit_btn").click(); 		
        document.querySelector("#form-button").disabled = false; 		
        return; 	
    } 	
        
    let name = document.querySelector("#input_name").value; 	
    if(name.length == 0){ 		name = "Anonymous"; 	
} 	

let formData = new FormData(); 	
formData.append('name',name); 	
formData.append('image',image.files[0]); 	

fetch('https://covid19-detection-api.herokuapp.com/api/image', { 		
    method:'POST', 		
    body: formData 	
}) 	
.then(response => response.json()) 	
.then(response => { 		if(response.success){ 			
    document.querySelector("#result-div").innerHTML = ` 				
    <h6>success: ${response.success}</h6> 				
    <h6>method: ${response.method}</h6> 				
    <h6>name: ${response.name}</h6> 				
    <h6>description: ${response.description}</h6> 				
    <h6>covid_percentage: ${response.covid_percentage}</h6> 				
    <h6>normal_percentage: ${response.normal_percentage}</h6> 				
    <h6>pneumonia_percentage: ${response.pneumonia_percentage}</h6> 				
    <h6>prediction: ${response.prediction}</h6> 				
    <h6>image_url: ${response.image_url}</h6> 			`; 		
} 		
else{ 			
    document.querySelector("#result-div").innerHTML = ` 				
    <h6>success: ${response.success}</h6> 				
    <h6>method: ${response.method}</h6> 				
    <h6>description: ${response.description}</h6> 			`; 		
} 	
}) 	

.then(()=>{ 			
    document.querySelector("#form-button").disabled = false; 	
})};