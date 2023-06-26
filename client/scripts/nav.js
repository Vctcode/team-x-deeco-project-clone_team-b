const openMenu = document.getElementById("open-menu");
const mobileMenu = document.getElementById("mobile-menu")
const closeMenu = document.getElementById("close-menu")

mobileMenu.addEventListener('mouseremove', function() {
    mobileMenu.style = "display: none";
})

openMenu.addEventListener('click', function() {
    mobileMenu.style = "display: flex";
})

closeMenu.addEventListener('click', function(){
    mobileMenu.style = "display: none";
})