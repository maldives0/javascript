//menu

window.addEventListener('DOMContentLoaded', function () {
    var menu = document.querySelector('.menu');
    var menuTri = menu.querySelector('.menu .trigger-menu');
    
    var menuCon = menu.querySelector('.menu div p');
    menuTri.addEventListener('click',fun);
    function fun(){
        menuTri.classList.toggle('active');
menuCon.classList.toggle('active');
    }

   
});