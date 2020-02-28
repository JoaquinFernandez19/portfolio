	
/////////////////////////////////////Projects image slideshow////////////////////////////////////	

//// using  OOP ///


// Slideshow constructor
function Slideshow (images,name,htmlSrc,counter){
	this.images = images;
	this.name = name;
	this.htmlSrc = htmlSrc;
	this.counter = counter;

	//img change method
	this.changeImg = function(){

		(this.htmlSrc).src = this.images[this.counter];
		if (this.counter < (this.images).length - 1){
				this.counter++;
		}else {
				this.counter = 0;
		}
	};
}

//objects creation
var project3shards = new Slideshow();
project3shards.images = ["./img/3shards0.png","./img/3shards1.png","./img/3shards2.png"];
project3shards.name = '3Shards slideshow';
project3shards.htmlSrc = slide;
project3shards.counter = 0;

var projectPortfolio = new Slideshow();
projectPortfolio.images = ["./img/portfolio1.png","./img/portfolio2.png"];
projectPortfolio.name = 'Portfolio slideshow';
projectPortfolio.htmlSrc = slide3;
projectPortfolio.counter = 0;

var projectPlaceholder = new Slideshow();
projectPlaceholder.images = ["./img/placeholder1.png","./img/placeholder3.png"];
projectPlaceholder.name = 'Placeholder slideshow';
projectPlaceholder.htmlSrc = slide2;
projectPlaceholder.counter = 0;




//

window.onload =setInterval(function(){
	setInterval(project3shards.changeImg() , 0 );
	setInterval(projectPortfolio.changeImg() , 0 );
	setInterval(projectPlaceholder.changeImg() , 0 );
}, 1500);






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


