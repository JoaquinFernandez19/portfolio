var i = 0; 			// Start Point
var images3shards = ["../img/3shards-0.png","../img/3shards-1.png","../img/3shards-2.png"];
var imagesPlaceholder = ["../img/placeholder-1.png","../img/placeholder-2.png","../img/placeholder-3.png"];
var imagesPortfolio = ["../img/portfolio-1.png","../img/portfolio-2.png","../img/portfolio-3.png"];	// Images Array
var time = 3000;	// Time Between Switch
	 
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
