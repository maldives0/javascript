
window.addEventListener('DOMContentLoaded', function () {
    //json load
    var data = new XMLHttpRequest(),
        response,
        workDiv = document.querySelector('#work div'), divData;
    data.open('Get', 'data.json', true);
    data.send(null);

    data.addEventListener('load', fun);

    function fun() {
        response = JSON.parse(data.responseText);

        response.work.forEach(function (el) {

            divData = "<div class='col-4'><a href='#' class='image fit'><img src='" + el + "' alt='' /></a></div>";
            workDiv.innerHTML += divData;
        });
    }

    //main height
    $('#main article').each(function (i, a) {

        $('#main article').eq(i).css({
            display: "none",
            opacity: "0"
        });
    });
    $('#main article').eq(0).css({
        display: "flex",
        opacity: "1"
    });

    $('#nav a').eq(0).addClass('active');

    $('#nav a').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).index();




        history.pushState({ page: idx }, 'tit', '');
        //history 기록 남기기
        //nav를 클릭하면 실행되기 시작된다
        //page에는 state에 idx값을 남긴다
        // 주소창에 마지막 /뒷부분(해시테그:해당페이지명 뒤) 빈값으로 두면 보이지 않는다
        con(idx);

    })

    function con(idx) {

        //nav
        $('#nav a').removeClass('active');
        $('#nav a').eq(idx).addClass('active');

        var conH = $('#main article').eq(idx).outerHeight();
        //margin값까지 더한다
        //innerHeight: padding값까지 더한다

        //hide
        $('#main article').stop().animate({ opacity: 0 }, 500, function () {
            $('#main article').hide();

        });//stop stack에 쌓여있는 event를 초기화시킨다 

        //show
        $('#main').delay(400).animate({ height: conH }, 500, function () {
            $('#main article').eq(idx).show().css('opacity', '1');

        });
    }


    //window.addEventListener('popstate',function(){})
    //  window.onpopstate = function(){}
    $(window).on('popstate', function () {


        var state;
        //history의 state 항목에 key값인 page에 들어있는 (idx)값을 얻는다
        

        try {
            state = history.state.page;
           
        } catch {
           
            state = 0;
            //원래 page값에는 0이 들어있지 않으므로 직접 값0을 넣어주어야 한다
        }
        con(state);
       

    })
});//end