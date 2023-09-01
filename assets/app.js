
const menuButton = document.querySelector(".menu-header");
const menuDrawer = document.querySelector("#menu-drawer");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", ()=> {
    menuDrawer.classList.toggle("show");
    overlay.classList.toggle("show");
});

overlay.addEventListener("click", ()=>{
    menuDrawer.classList.toggle("show");
    overlay.classList.toggle("show");
});