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
const header = document.querySelector('nav');
const sectionOne = document.querySelector('.landing');
const sectionOneOption = {
	rootMargin : "-100px 0px 0px 0px"
};

const sectionOneObserver = new intersectoinOberver(function(
	entries,
	sectionOneObserver
){
	if(!entry.isIntersecting) {
		header.classList.add("nav-scroll");
	}else {
		header.classList.remove("nav-scroll");
	};
},sectionOneOption)

sectionOneObserver.observe(sectionOne);