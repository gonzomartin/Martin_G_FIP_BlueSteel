(function(){
	"use strict";
	console.log("fired");

	const button = document.querySelector("#button");
	const burgerMenu = document.querySelector(".burgerMenu");
	const productCont = document.querySelectorAll('.productContainer'),
				theBanner = document.querySelector('.bigPics');

	function hamburgerMenu() {
		//console.log("burger time!")
		button.classList.toggle("expanded");
		burgerMenu.classList.toggle("slideToggle");
	}

	function animateBanners () {
    // figure out how much to move the banner images
    theBanner.style.right = `${this.dataset.offset * 751}px`;
  }


	button.addEventListener("click", hamburgerMenu);
	productCont.forEach(productCont => productCont.addEventListener('click', animateBanners));

	animateBanners.call(productCont[0]);
})();
