const chk = document.getElementById('chk');
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
window.addEventListener("scroll",function(event){
	let scroll = this.screenY;
	if(scroll <= 616){
		document.body.header.style.postion = relative;
	} else{
		document.body.header.style.postion = fixed;
	}
})