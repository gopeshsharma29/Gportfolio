// sticky nav -------
const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});

// responsive nav

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.menu');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

// slider ----------

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:100, origin:'left'})
sr.reveal('.home-img',{delay:100, origin:'right'})

// sr.reveal('.contact',{delay:30, origin:'bottom'})
// sr.reveal('.about-img',{delay:30, origin:'top'})