const ham = document.querySelector('.ham-menu');
const nav = document.querySelector('nav');

ham.addEventListener('click', animateMenu);
	function animateMenu() {
		nav.classList.toggle('hamburger-open');
	}