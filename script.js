// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

// let menuArrows = document.querySelectorAll('.links-header__arrow');
// 	if (menuArrows.length > 0) {
// 		for (let index = 0; index < menuArrows.length; index++) {
// 			const menuArrow = menuArrows[index];
// 			menuArrow.addEventListener("click", function(e) {
// 				menuArrow.parentElement.classList.toggle('_active');
// 			});
// 		}
// 	}

// const iconMenu = document.querySelector('.menu__icon');
// const headerMenu = document.querySelector('.menu-header');
// const phoneL = document.querySelector('.header__phone');

// if (iconMenu) {
// 	iconMenu.addEventListener("click", function (e) {
// 		document.body.classList.toggle('lock');
// 		iconMenu.classList.toggle('_active');
// 		headerMenu.classList.toggle('_open');
// 		phoneL.classList.toggle('change');
// 	});
// }


window.onload = function () {
	document.addEventListener('click', documentActions);

	function documentActions (e) {
		const targetElement = e.target;
		if(window.innerWidth > 480 && targetElement.classList.contains('search-form__btn')) {
			document.querySelector('.header__search').classList.toggle('_active');
		}

		if(!targetElement.closest('.search-form')) {
			document.querySelector('.header__search').classList.remove('_active');
		}
		
		if (targetElement.classList.contains('menu__icon') || targetElement.closest('.menu__icon')) {
			const navMenu = document.querySelector('.nav-menu');
			const menuBurger = document.querySelector('.menu__icon');
			document.body.classList.toggle('lock');
			navMenu.classList.toggle('_open');
			menuBurger.classList.toggle('_active');
		}
	}
}

