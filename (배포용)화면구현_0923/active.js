$(function(){
    $('header .menu-trigger').on('click',function(){

        $('header .menu-trigger').toggleClass('active');
        if( $('header .menu-trigger').hasClass('active') ){
            $('.navbar').hide();
        }else{
            $('.navbar').show();
        }

    });//end
$('.view a').on('click',function(){
    $('.popup').addClass('active');
    $('.popup .menu-trigger').on('click',function(){
        $('.popup').removeClass('active');
    })
})

});