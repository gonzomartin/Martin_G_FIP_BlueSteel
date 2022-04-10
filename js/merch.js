(function(){
	"use strict";
	console.log("fired");

	const button = document.querySelector("#button");
	const burgerMenu = document.querySelector(".burgerMenu");

	function hamburgerMenu() {
		//console.log("burger time!")
		button.classList.toggle("expanded");
		burgerMenu.classList.toggle("slideToggle");
	}


	button.addEventListener("click", hamburgerMenu);
})();
