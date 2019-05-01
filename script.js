const nav = document.querySelector('.ham-menu');

nav.addEventListener('click', animateMenu);

	function animateMenu() {
		nav.classList.toggle('hamburger-open');
}