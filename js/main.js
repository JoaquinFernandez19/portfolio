


////// modal pop up gmail as a OOP test /////// pogers/////


let modal = {
	name: 'modal',
	content : document.getElementById('modal'),
	style: document.getElementById('modal').style,

	openBtn : document.getElementById('modalBtn'),
	closeBtn : document.getElementById('closeBtn'),

	openModal : function(){
		this.style.display = 'flex';
	},
	closeModal : function(){
		this.style.display = 'none';
	}
}

//listener to open
modal.openBtn.addEventListener('click',function(){
	if (modal.style.display === 'none') {
		modal.openModal();
	}else {
		modal.closeModal();
	}
});
//listener to close
modal.closeBtn.addEventListener('click',function(){
	modal.closeModal();
});














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

var slideshowPlaceholder = new Slideshow(
 ["./img/placeholder1.png","./img/placeholder3.png"],'Placeholder slideshow', slide2 , 0
 );




//

window.onload =setInterval(function(){
	slideshow3shards.changeImg();
	slideshowPortfolio.changeImg();
	slideshowPlaceholder.changeImg();
}, 1500);






