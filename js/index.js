// Making the navigation sticky with scroll
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0)
});

//Making a scroll to top button
const scrollButton = document.querySelector(".scrollToTop-Btn");

window.addEventListener("scroll", function() {
  scrollButton.classList.toggle("active", window.scrollY > 500)
});

//clicking on the Scroll to top button, taking you back to the start of the page  
scrollButton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//making a responsive nav menu
const navMenu = document.querySelector(".hamburger-Button");
const navigation = document.querySelector(".navigation");
const navMenuItems = document.querySelectorAll("navigation a")
navMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navigation.classList.toggle("active");
});

navMenuItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navigation.classList.remove("active");
  })
});

//revealing hidden items.
window.addEventListener("scroll", reveal);

function reveal() {
  let revealItem = document.querySelectorAll(".reveal"); 
  
  for(let i = 0; i < revealItem.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = revealItem[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint) {
      revealItem[i].classList.add("active");
    }
  }
}