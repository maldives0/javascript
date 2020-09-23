$(function () {
    
    // $(window).on('scroll',imgScale);


    // var scale = 0, imgTop, top;
    // function imgScale(e){
    //      top = $(this).scrollTop();
    //     $('.content__item').each(function(){
    //          imgTop = $(this).offset().top-$(window).height()/2;
    //         if(top > imgTop){
    //            scale = 1.5;
             
    //         }else{
    //             scale = 1;
             
    //         }
    //         $(this).find('.content__item-img').css({
    //             transform:'scale('+scale+')'
    //         })
    //     })
    // }

    var scale = 0, imgTop, top;
    var page = $('main').height();
    $('body').height(page);

    $(window).on('scroll',imgScale);
    

    var scale = 0, imgTop, top,ty=0;
    function imgScale(e){
        top = $(this).scrollTop();

        $('main').css({
            transform:'translateY(-'+top+'px)'
        });


       
        $('.content__item').each(function(){
             imgTop = $(this).offset().top-$(window).height();
            if(top > imgTop){
               scale = 1.5;
                ty += 10;
            }else{
                scale = 1;
                ty -= 10;
            }

            $(this).find('.content__item-img').css({
                transform:'scale('+scale+')'
            })

            $(this).find('.content__item-title').css({
                transform:'translateY(-'+ty+'px)'
            })
        })
    }





    //end
});