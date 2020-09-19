window.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('.navbar');
    var btnD = document.querySelector('.hero-full-container a');
    var D = document.querySelector('.hero-full-container .container');


    

    var bT = btnD.offsetTop+D.offsetTop;
   
   
    window.addEventListener('scroll', function () {
       // console.log(this.scrollY)
        if (bT  <= this.scrollY) {
            
            nav.classList.add('active');
           
        } else {
            nav.classList.remove('active');
           

        }
        //scroll
    });





});//end
window.addEventListener('DOMContentLoaded', function () {


    //btn
$('.item .left').on('click',prev);
$('.item .right').on('click',next);
var idx,len = 0;
len = $('.item').length;

    function prev(e) {

       e.preventDefault();
       var p =e.currentTarget.parentElement.parentElement.parentElement;
       console.log(p)
       var c = p.children;
       console.log(c)
       idx = Array.from(c).indexOf(e.currentTarget.parentElement.parentElement);
       console.log(idx)
       idx = $(this).parents('.item').index();
       idx = 
       idx += 1;
     if(idx == len) idx = 0;
    change();



    };
    function next(e) {

       e.preventDefault();
       var p =e.currentTarget.parentElement.parentElement.parentElement;
       console.log(p)
       var c = p.children;
       
       idx = Array.from(c).indexOf(e.currentTarget.parentElement.parentElement);
       console.log(idx)
       idx = $(this).parents('.item').index();
       idx += 1;
     if(idx == len) idx = 0;
    change();



    };
    function change(){
     
        $('.item').each(function(a,i){

            $('.item').removeClass('active');
           });
  setInterval(function(){
    $('.item').eq(idx).addClass('active');
    },200);


     }


});//end
