const menuBtn = document.getElementById("menu-bar")

menuBtn.addEventListener('click', function(){
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
})