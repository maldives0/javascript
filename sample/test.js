$(function () {


    (function () {
        $.ajax({
            url: 'data.xml',
            type: 'GET',
            success: function (data) {
                var items, detail, thumb, name, popImg, popN,
                    idx = 0, len = 0;

                $(data).find('item').each(function (i) {

                    detail = $(this).find('detail').text();
                    thumb = $(this).find('thumb').text();
                    name = $(this).find('name').text();

                    items = "<article class='thumb' name='" + i + "'>";
                    items += "<a href='" + detail + "'class='image'><img src='" + thumb + "' /></a>";
                    items += "<h2>" + name + "</h2></article>";
                    $('#main').append(items);
                });

                //popup

                $('#main .thumb').on('click',
                    function select(e) {
                        e.preventDefault();
                        $('.poptrox-overlay').show();

                        idx = $(this).index();
                        popChange();

                    });

                function popChange() {

                    // $(data).find('item').eq(i).find(detail).text(); //xml 값 가져오기


                    popImg = $('#main .thumb').eq(idx).find('a').attr('href');
                    popN = $('#main .thumb').eq(idx).find('h2').text();

                    $('.poptrox-popup .pic img').attr('src', popImg);
                    $('.poptrox-popup .caption h2').text(popN);
                }

                $('.closer, .nav-next, .nav-previous').on('click', btn);
                function btn() {
                    var btnName = $(this).attr('class');
                    btnName == 'nav-next' ? idx++ : idx--;

                    if (idx == len) idx = 0;
                    if (idx == -1) idx = len - 1;
                    popChange();
                    btnName == 'closer' && $('.poptrox-overlay').hide();

                }



                //suc
            }
            //ajax
        })
    })();


    (function () {
        //about
        var nameCheck = RegExp(/^[가-힣]{2,6}$/);
        var emailCheck = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

        var $name, $email;

        $('.icon').on('click', function () {
            $('#footer').toggleClass('active');
        });
        $('input[type=submit]').on('click', function (e) {
            e.preventDefault();
            $name = $('input[name=name]');
            $email = $('input[name=email]');

            if ($name.val() == '' || !nameCheck.test($name.val())) {
                alert('name input error');
                $name.focus();
                return;
            }
            if ($email.val() == '' || !emailCheck.test($email.val())) {
                alert('email input error');
                $email.focus();
                return;
            }
            msg.action = "http://naver.com";
            msg.submit();
            $('#footer').removeClass('active');
        })

    })();



    //end
});