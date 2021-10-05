// Scroll button 

document.querySelector(".scroll-btn").addEventListener
("click",()=>{
 document.querySelector("html").style.scrollBehavior = "smooth";
 setTimeout(()=>{
    document.querySelector("html").style.scrollBehavior = "unset";
 },1000);
}); 

// Menu Icon
var menu = document.querySelector("#menu-bar");
var navbar = document.querySelector(".navbar");

menu.addEventListener('click',() => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
});