$(function () {
    var imgT = [], imgH = [], iT, iH,
        winH ,
        $img = $('.content__item-img');
        $tit = $('.content__item-title');

    $(window).on('scroll', function () {

 winH = $(this).innerHeight()
        $img.each(function (i, el) {

            iH = $img.eq(i).height();
            imgH.push(iH);
            iT = $img.eq(i).offset().top;
            imgT.push(iT);
           
            console.log($(window).scrollTop())
            if (imgT[i] < $(window).scrollTop() + winH) {

                if (imgT[i] + imgH[i] / 2 <= $(window).scrollTop() + winH / 2) {

                   $img.eq(i).css({
                        transform: 'scale(1.2)'
                    });
                    $tit.eq(i).css({
                        transition:'.8s',
                        transform: 'translateY(-400%)'
                    });

                }else{
                    $img.eq(i).css({
                        transform: 'scale(1)'
                    });
                    $tit.eq(i).css({
                        transition:'.8s',
                        transform: 'translateY(0%)'
                    });
                }
            }



        });





    })

    //end
});