
// FOR THE STICK NAV MENU
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}





// RESPONSIVE NAV MENU
const Navy = document.querySelector('.nav-menu')
const Ham = document.querySelector('.harmburger')
const Linky = document.querySelectorAll('.nav-link')

	Ham.addEventListener("click", ()=>{
	Navy.classList.toggle("active")
	Ham.classList.toggle("active")
})
Linky.forEach(n=> n.addEventListener('click', ()=>{
	Navy.classList.remove("active")
	Ham.classList.remove("active")
}))