$(function () {
    //start    
    $('header').load('/inc_header_footer.html header nav', header);
    $('footer').load('/inc_header_footer.html footer p');

    function header() {
      
        $('header nav a').eq(localStorage.pageNum).addClass('active');

        $('header nav a').on('click', function (e) {
            e.preventDefault();

            localStorage.pageNum = $(this).index();
            // localStorage의 key값을 pageNum으로 정함 
            location.href = $(this).attr('href');
            //location.href: 주소창의 경로
            //attr: a tag의 속성
            //click할 때 페이지가 변경되면서 js 문서가 다시 읽힌다

            
            // $.ajax({
            //     url:'data.xml'
            // });
        });
    }
    //end    
})
