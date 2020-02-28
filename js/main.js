

 /////// welcome to my script, here you can see that i tried to make everything object oriented/////
////// modal pop up gmail as a OOP test /////// pogers/////


let modal = {
	inside : document.getElementById('modal'),
	text : document.querySelector('.content__modalGmail'),
	style: document.getElementById('modal').style,
	//buttons
	openBtn : document.getElementById('modalBtn'),
	closeBtn : document.getElementById('closeBtn'),
	//methods
	openModal : function(){
		this.style.display = 'flex';
	},
	closeModal : function(){
		this.style.display = 'none';
	}
}

// listener to open
modal.openBtn.addEventListener('click',function(){
	if (modal.style.display === 'none') {
		modal.openModal();
	}else {
		modal.closeModal();
	}
});
// listener to close
modal.closeBtn.addEventListener('click',function(){
	modal.closeModal();
});

// listener for window click and close
window.addEventListener('click',function(e){
	if(e.target != modal.inside && e.target != modal.openBtn && e.target != modal.text){
		modal.closeModal();
	}
});







/////////////////////////////////////slideshows image slideshow////////////////////////////////////	
//// using  OOP ///
// Slideshow constructor
class Slideshow {
	constructor(images, name, htmlSrc, counter) {
		this.images = images;
		this.name = name;
		this.htmlSrc = htmlSrc;
		this.counter = counter;
		//img change method
		this.changeImg = function () {
			(this.htmlSrc).src = this.images[this.counter];
			if (this.counter < (this.images).length - 1) {
				this.counter++;
			}
			else {
				this.counter = 0;
			}
		};
	}
}

//objects creation
var slideshow3shards = new Slideshow(
["./img/3shards0.png","./img/3shards1.png","./img/3shards2.png"],'3Shards slideshow',slide,0);

var slideshowPortfolio = new Slideshow(
["./img/portfolio1.png","./img/portfolio2.png"],'Portfolio slideshow',slide3, 0);





//

window.onload =setInterval(function(){
	slideshow3shards.changeImg();
	slideshowPortfolio.changeImg();
}, 1500);






