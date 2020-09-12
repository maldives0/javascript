$(function () {
    //start  

    $.ajax({
        url: 'data.json',
        type: 'GET',
        data: { a: 10 },
        beforeSend: function () {

            $('.loading').fadeIn();

        },
        complete: function () {

            $('.loading').fadeOut();
        },
        success: function (data) {
            var type, kind, imgSrc, tit, url, tagList = '';

            function funList(code) {
                tagList = '';
                data.product.forEach(function (value, key) {
                    //console.log(value)
                    type = value.type;
                    kind = value.kind;
                    imgSrc = value.imgSrc;
                    tit = value.tit;
                    url = value.url;

                    tit = value.tit.substr(0, 20) + '...';

                    if (code == type || code == '') {
                        tagList += "<figure>";
                        tagList += "<a href='" + url + "'>";
                        tagList += "<p><img src='" + imgSrc + "' alt=''></p>";
                        tagList += "<figcaption>";
                        tagList += "<i>" + kind + "</i>";
                        tagList += "<p>" + tit + "</p>";
                        tagList += "</figcaption></a>";
                        tagList += "</figure>";
                    }
                    //foreach end
                });
                //end
                $('.list').html(tagList);
                
                $('.tab a').removeClass('active');
                var idx = code.substr(3);
                $('.tab a').eq(idx).addClass('active');
                //funList end
            }


            funList('');


            $('.tab a').on('click', function (e) {
                e.preventDefault();
                var code = $(this).attr('href');
                //console.log(code)
                funList(code);
              
              
                //history 내역을 클릭할 때마다 흔적을 쌓는다
                history.pushState({ page: code }, 'pageHistory', '');
            });

            $(window).on('popstate', function () {

                var code = history.state.page;
              
                funList(code);

                
            });

            //success end
        }

        //end
    });








    //end    
})



