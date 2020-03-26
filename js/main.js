/////// welcome to my script, here you can see that i tried to make everything object oriented/////
////// modal pop up gmail as a OOP test /////// pogers/////

let modal = {
  inside: document.getElementById("modal"),
  text: document.querySelector(".content__modalGmail"),
  style: document.getElementById("modal").style,
  //buttons
  openBtn: document.getElementById("modalBtn"),
  closeBtn: document.getElementById("closeBtn"),
  //methods
  openModal: function() {
    this.style.display = "flex";
  },
  closeModal: function() {
    this.style.display = "none";
  }
};

// listener to open
modal.openBtn.addEventListener("click", function() {
  if (modal.style.display === "none") {
    modal.openModal();
  } else {
    modal.closeModal();
  }
});
// listener to close
modal.closeBtn.addEventListener("click", function() {
  modal.closeModal();
});

// listener for window click and close
window.addEventListener("click", function(e) {
  if (
    e.target != modal.inside &&
    e.target != modal.openBtn &&
    e.target != modal.text
  ) {
    modal.closeModal();
  }
});

/////////////////////////////////////slideshows image slideshow////////////////
//// using  OOP ///
// Slideshow constructor
class Slideshow {
  constructor(images, htmlSrc, counter) {
    this.images = images;
    this.htmlSrc = htmlSrc;
    this.counter = counter;
    //img change method
    this.changeImg = function() {
      this.htmlSrc.src = this.images[this.counter];
      if (this.counter < this.images.length - 1) {
        this.counter++;
        this.htmlSrc.classList.toggle("animated");
        this.htmlSrc.classList.toggle("fadeIn");
      } else {
        this.counter = 0;
      }
    };
  }
}

//objects creation
var slideshow3shards = new Slideshow(
  ["./img/3shards0.png", "./img/3shards1.png", "./img/3shards2.png"],
  slide,
  0
);

var slideshowPizza = new Slideshow(
  ["./img/pizza-1.png", "./img/pizza-2.png", "./img/pizza-3.png"],
  slide5,
  0
);

var slideshowPortfolio = new Slideshow(
  ["./img/portfolio1.png", "./img/portfolio2.png"],
  slide3,
  0
);
var slideshowTicTac = new Slideshow(
  ["./img/tic2.png", "./img/tic3.png"],
  slide4,
  0
);
var slideTasku = new Slideshow(
  ["./img/task1.png", "./img/task2.png"],
  slide6,
  0
);

//

window.onload = setInterval(function() {
  slideshowPortfolio.changeImg();

  slideshowPizza.changeImg();
}, 2000);
window.onload = setInterval(function() {
  slideshow3shards.changeImg();

  slideshowTicTac.changeImg();

  slideTasku.changeImg();
}, 2500);
