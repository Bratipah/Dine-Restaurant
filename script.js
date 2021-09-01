// Toggle navbar
const navToggler = document.querySelector(".nav-toggler")
navToggler.addEventListener("click",toggleNav)

function toggleNav(){
    navToggler.classList.toggle("active")
    document.querySelector(".nav").classList.toggle("open")
}