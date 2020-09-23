$(function () {

    $.ajax({
        url: 'data.xml',
        type: 'GET',
        success: function (data) {
            var detail, thumb, article, name,len,idx=0;
            $(data).find('item').each(function () {
                
                
                detail = $(this).find('detail').text();
                thumb = $(this).find('thumb').text();
                name = $(this).find('name').text();

                article = "<article ><a class='thumbnail' href='" + detail + "'><img src='" + thumb + "' alt='" + name + "' /></a> </article>";


                $('#thumbnails').append(article);




            });//data

            len = $('#thumbnails article').length;
            
            //slide
            $('#thumbnails article').on('click', function (e) {
                e.preventDefault();
               
                $('#thumbnails article').removeClass('active');
                $(this).addClass('active');
                idx = $(this).index();

                slide(idx);
               
               

            });//slide

            function slide(idx){
                detail = $('#thumbnails article').eq(idx).find('a').attr('href');
                thumb = $('#thumbnails article').eq(idx).find('img').attr('src');
                name = $('#thumbnails article').eq(idx).find('img').attr('alt');

                $('.slide .image').css({
                    'background': "url("+detail+")",
                    'background-position':"center center"
                });
                $('.slide .caption h2').html( name );
            }

            //toggle

            $('.toggle').on('click', function () {
                $('body').toggleClass('fullscreen');
            });

            //btn
            $('.nav-previous,.nav-next').on('click',btn);function btn(){
                var btnName = $(this).attr('class');
               
                btnName == 'nav-previous' ? idx-- : idx++ ;
                if(idx == len) idx = 0 ;
                if(idx == -1) idx = len - 1 ;
                slide(idx);

            }
            
        }//suc
    })


})