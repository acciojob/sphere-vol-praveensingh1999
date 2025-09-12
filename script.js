function volume_sphere() {
    //Write your code here
	const radius = parseFloat(document.querySelector("#radius").value);
	console.log(radius); 
	const volume = document.querySelector("#volume");
	let ans = (3.14*radius*radius*radius*4)/3;
	let val=ans.toFixed(4);
	console.log(ans);
	if(isNaN(ans)){
		volume.value = `Calculated volume should be 'NaN' due to invalid input`;
	}
	else{
		volume.value = `Calculated volume should be approximately ${val}`;
	}
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
