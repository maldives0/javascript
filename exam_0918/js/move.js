window.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('.navbar');
    var btnD = document.querySelector('.hero-full-container a');




    var bT = btnD.offsetTop;
    nav.style = "position:fixed; left:0; right:0; z-index:100;";
    console.log(bT)
    window.addEventListener('scroll', function () {
        console.log(this.scrollY)
        if (bT + 200 <= this.scrollY) {
            
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
       idx = $(this).parents('.item').index();
       idx += 1;
     if(idx == len) idx = 0;
    change();



    };
    function next(e) {

       e.preventDefault();
       idx = $(this).parents('.item').index();
       idx += 1;
     if(idx == len) idx = 0;
    change();



    };
    function change(){
        console.log('hi')
        $('.item').each(function(a,i){

            $('.item').removeClass('active');
           });
  setInterval(function(){
    $('.item').eq(idx).addClass('active');
    },200);


     }


});//end
