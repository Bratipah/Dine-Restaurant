
window.addEventListener("load",function(){
    // Page Loader
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(function(){
        document.querySelector(".page-loader").getElementsByClassName.display="";
    },600);

   // Scroll Animation
    AOS.init();
});

// Toggle navbar
const navToggler = document.querySelector(".nav-toggler")
navToggler.addEventListener("click",toggleNav)

function toggleNav(){
    navToggler.classList.toggle("active")
    document.querySelector(".nav").classList.toggle("open")
}

// close nav onclick on nav item
document.addEventListener("click", function(e){
    if(e.target.closest("nav-item")){
        toggleNav();
    }
})

// Sticky header
window.addEventListener("scroll",function(){
    if(this.pageYoffset > 60 ){
        document.querySelector(".header").classList.add("sticky")
    }else{
        document.querySelector(".header").classList.remove("sticky")
    }
})

const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function(e){
    if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
        const target = e.target.getAtrribute("data-target");
        menuTabs.querySelector("active").classList.remove("active");
        e.target.classList.add("active");
        const menuSection = document.querySelector(".menu-section");
        menuSection.querySelector(".meun-teb-content.active").classList.remove("active")
        menuSecction.querySelector(target).classList.add("active");
    }
})