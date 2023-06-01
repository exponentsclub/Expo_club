const chk = document.getElementById('chk');
let header = document.getElementById('header');
chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});

// SCROLL EFFECT 
window.scroll() == function (){
	let value = scrollY;
	value <= 616 ? header.style.position = relative : header.style.position = fixed;
}