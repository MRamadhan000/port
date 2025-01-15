// navbarFixed

window.onscroll = function(){
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add("navbarFixed");
    }else{
        header.classList.remove("navbarFixed");
    }
}

//Hamburger Menu

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navMenu");

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburgerActive');
    navMenu.classList.toggle('hidden');
});