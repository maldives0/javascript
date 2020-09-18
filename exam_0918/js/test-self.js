$(function(){
    (function(){
        //header
        var $spotHeight = $('.hero-full-container a').offset().top+100, top;
        console.log($spotHeight)
        function nav(){
            top = $(window).scrollTop();
           if(top > $spotHeight ){
               $('nav').addClass('active');
           }else{
            $('nav').removeClass('active');
           }
        }
       $(window).on('scroll',nav);
    })();
    (function(){

    })();
})