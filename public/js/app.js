var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

/* -------------------- MENU -------------------*/
const menuMobileLinks = document.querySelector(".menu-mobile-content");
const menuMobileBottom = document.querySelector(".menu-mobile-content-bottom");
const menuLinks = document.querySelector(".menu-links");
const contactosLinks = document.querySelector(".menu-contactos-links");
const socialLinks = document.querySelector(".menu-social-links");
const footerContactos = document.querySelector(".footer-contactos");

const openMenu = document.querySelector(".menu-open");
const closeMenu = document.querySelector(".menu-close");
const menuDiv = document.querySelector(".mobile-menu-body");
const menu = document.querySelector(".menu-mobile-body-list");

menuLinks.querySelectorAll("a").forEach((element)=>{
    if(element.pathname == document.location.pathname){
        element.classList.add("menu-active");
    }
});

openMenu.addEventListener("click", menuToggle);
closeMenu.addEventListener("click", menuToggle);

menuMobileLinks.insertAdjacentHTML("afterbegin", menuLinks.innerHTML);
document.body.insertAdjacentHTML("beforeend", "<div id='menu-overlay'></div>");
document.querySelector("#menu-overlay").addEventListener("click", menuToggle);

menuMobileBottom.insertAdjacentHTML("afterbegin", socialLinks.innerHTML);
menuMobileBottom.insertAdjacentHTML("afterbegin", contactosLinks.innerHTML);

function menuToggle() {
    menuDiv.classList.toggle("active");
    document.body.classList.toggle("hide-scrolling");
    document.body.classList.toggle("mobile-menu-active");
    document.getElementById("menu-overlay").classList.toggle("show");
}


/* -------------------- efeitos Scroll  -------------------*/

window.onscroll = function() { transformarMenu() };


var headerMobile = document.getElementById("header-mobile");
var headerDesktop = document.getElementById("header-desktop");
const heroSection = document.querySelector(".hero-section");
const backTop = document.querySelector(".back-top");
const topBar = document.getElementById("top-bar");

function transformarMenu() {
    
  if (window.scrollY > 50) {
    headerMobile.classList.add("header-mobile-scrolled");
  } else {
    headerMobile.classList.remove("header-mobile-scrolled");
  }

  if (window.scrollY >= 500) {
    topBar.classList.add("top-bar-hide");
    backTop.classList.add("back-top-show");
  }else{
    topBar.classList.remove("top-bar-hide");
    backTop.classList.remove("back-top-show");
      if (window.scrollY > (500 / 2)) {
        headerDesktop.classList.add("header-desktop-scrolled");
      } else {
        headerDesktop.classList.remove("header-desktop-scrolled");
      }
  }


  

}





