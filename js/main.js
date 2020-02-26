	
/////////////////////////////////////Projects image slideshow////////////////////////////////////	


	let i = 0; 	// Start Point
	let images3shards = ["./img/3shards0.png","./img/3shards1.png","./img/3shards2.png"]; //Image arrays
	let  imagesPlaceholder = ["./img/placeholder1.png","./img/placeholder2.png","./img/placeholder3.png"]; //Image arrays
	let imagesPortfolio = ["./img/portfolio1.png","./img/portfolio2.png","./img/portfolio3.png"];	 //Image arrays
// Change Image
function changeImg(){

	const time = 1500;	// Time Between Switch

	 //Change the src of the img in the "slide" element depending of the current position of "i"
    document.slide.src = images3shards[i];
	document.slide2.src = imagesPlaceholder[i];
	document.slide3.src = imagesPortfolio[i];

	// Check If Index Is Under Max
	if(i < images3shards.length - 1){
	// Add 1 to Index
	  i++; 
	} else { 
	// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload = changeImg;



/////////////////////////////////////Gmail pop up////////////////////////////////////	

//Get modal elements
const modal = document.getElementById('modal');
//Get open modal btn
const modalBtn = document.getElementById('modalBtn');
//Get close btn
const closeBtn = document.getElementById('closeBtn');


// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);


//Function to open modal 
function openModal(){
	modal.style.display = 'flex';
}
//Function to close modal 
function closeModal(){
	modal.style.display = 'none'; 
}


