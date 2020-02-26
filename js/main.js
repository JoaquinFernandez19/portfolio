
let i = 0; 			// Start Point
let images3shards = ["./img/3shards0.png","./img/3shards1.png","./img/3shards2.png"];
let  imagesPlaceholder = ["./img/placeholder1.png","./img/placeholder2.png","./img/placeholder3.png"];
let imagesPortfolio = ["./img/portfolio1.png","./img/portfolio2.png","./img/portfolio3.png"];	// Images Array
const time = 3000;	// Time Between Switch
	 
// Image List


// Change Image
function changeImg(){
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
window.onload=changeImg;
