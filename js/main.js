	
/////////////////////////////////////slideshows image slideshow////////////////////////////////////	

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
var slideshow3shards = new Slideshow();
slideshow3shards.images = ["./img/3shards0.png","./img/3shards1.png","./img/3shards2.png"];
slideshow3shards.name = '3Shards slideshow';
slideshow3shards.htmlSrc = slide;
slideshow3shards.counter = 0;

var slideshowPortfolio = new Slideshow();
slideshowPortfolio.images = ["./img/portfolio1.png","./img/portfolio2.png"];
slideshowPortfolio.name = 'Portfolio slideshow';
slideshowPortfolio.htmlSrc = slide3;
slideshowPortfolio.counter = 0;

var slideshowPlaceholder = new Slideshow();
slideshowPlaceholder.images = ["./img/placeholder1.png","./img/placeholder3.png"];
slideshowPlaceholder.name = 'Placeholder slideshow';
slideshowPlaceholder.htmlSrc = slide2;
slideshowPlaceholder.counter = 0;




//

window.onload =setInterval(function(){
	setInterval(slideshow3shards.changeImg() , 0 );
	setInterval(slideshowPortfolio.changeImg() , 0 );
	setInterval(slideshowPlaceholder.changeImg() , 0 );
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


