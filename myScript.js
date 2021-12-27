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
	<h6>Patient Name:	${response.name}<h6>
   	<h6>Covid Precentage: ${round(response.covid_percentage*100)} %</h6> 				
    <h6>Normal Percentage: ${round(response.normal_percentage*100)} %</h6> 				
    <h6>Pneumonia Percentage: ${round(response.pneumonia_percentage*100)} %</h6> 				
  			`; 		
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

function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}
